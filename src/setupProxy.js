const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/account/signup/",
    createProxyMiddleware({
      target: "http://34.64.111.239:8000",
      changeOrigin: true,
      ws: true,
    })
  );
};
