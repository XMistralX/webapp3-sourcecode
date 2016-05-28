var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
    res.render('index', {
      title: 'ReverseSearch'
    });
});

router.post('/', function (req, res, next) {
	var data = req.body.data;
	var dataRes;
	var options = {
	  host: "52.221.225.100",
	  port: 3000,
	  path: '',
	  method: 'POST'
	};

	var reqBody = http.request(options, function(res) {
	  console.log('STATUS: ' + res.statusCode);
	  console.log('HEADERS: ' + JSON.stringify(res.headers));
	  res.setEncoding('utf8');
	  res.on('data', function (chunk) {
	    console.log('BODY: ' + chunk);
	    dataRes = chunk;
	  });

	});
	reqBody.write({data: data});
	reqBody.end();

	res.send(200, data);
})
