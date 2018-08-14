"use strict";

const {server} = require('./express-server');

/////////////////////////////////
// CONFIGURACION SERVIDOR NEXT //
/////////////////////////////////

const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
console.log('dev', dev);
const app = next({dev});
const handle = app.getRequestHandler();
const Router = require('./next-routes').Router;

app.prepare().then(() => {
  Router.forEachPattern((page, pattern, defaultParams) => {
    return server.get(pattern, (req, res) => {
       return app.render(req, res, `/${page}`, Object.assign({}, defaultParams), req.query, req.params);
    });
  });

  server.get('*', (req, res) => {
    handle(req, res);
  });
});