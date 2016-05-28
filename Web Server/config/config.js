var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'wap'
    },
    port: 9000,
  },

  test: {
    root: rootPath,
    app: {
      name: 'wap'
    },
    port: 9000,
  },

  production: {
    root: rootPath,
    app: {
      name: 'wap'
    },
    port: 9000,
  }
};

module.exports = config[env];
