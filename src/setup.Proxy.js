const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    console.log('Using proxy...')
  app.use(proxy('/.netlify/functions/', { 
    target: 'http://localhost:3000/',
    "pathRewrite": {
      "^\\.netlify/functions": ""
    }
  }));
};