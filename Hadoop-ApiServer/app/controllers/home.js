var express = require('express'),
  router = express.Router();
var sys = require('sys')
var exec = require('child_process').exec;
var q = require('q');

function puts(error, stdout, stderr) { sys.puts(stdout) }

module.exports = function (app) {
  app.use('/', router);
};

router.post('/', function (req, res, next) {
  var data = req.body.data;
  var defered = q.defer();

    defered.promise.then(function() {
        var d = q.defer();
    	exec('echo' + data + ' > input.txt', function(error, stdout, stderr){
        puts(error, stdout, sterr);
    		d.resolve();
  		});
        return d.promise;
    })
    .then(function(){
    	var d = q.defer();
    	exec('hadoop fs -put -f input.txt', function(error, stdout, stderr){
        puts(error, stdout, sterr);
    		d.resolve();
  		});
        return d.promise;
    })
    .then(function(){
    	var d = q.defer();
    	exec('pig -x mapreduce search.pig', function(error, stdout, stderr){
        puts(error, stdout, sterr);
    		d.resolve(stdout);
  		});
        return d.promise;
    })
    .then(function(out){
    	res.send(200, out);
    });
});
