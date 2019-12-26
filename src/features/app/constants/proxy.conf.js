const proxy = require('http-proxy-middleware')
module.exports = function(app) {
  app.use(
    proxy('/api/mock', {
      target: 'https://mockapi.com:8080/', // needed for mock api to resolve cross-domain
      // changeOrigin: true, // needed for virtual hosted sites
      // ws: true, // proxy websockets
      pathRewrite: {
        '^/api/mock': '/api'
      }
    })
  );
};
