import path from 'path';
import authSetup from './utils/auth';
import express from 'express';
import http from 'http';
import { listen } from 'rethinkdb-websocket-server';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from '../webpack.config.js';
import env from './utils/envDefaults';

const app = express();
const server = http.createServer(app)

listen({
  httpServer: server,
  httpPath: '/db',
  dbHost: env.rethinkHost,
  dbPort: env.rethinkPort,
  unsafelyAllowAnyQuery: true
});

import './bot/bot.js';

authSetup(app);

// Add routes to app here:
// ex: app.use('/api', apiRoutes);

// referenced https://github.com/christianalfoni/webpack-express-boilerplate
if (env.isDev) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '../dist/index.html')));
    res.end();
  });
} else {
  app.use('/assets', express.static('dist'));

  // This redirects any GET requests that aren't for '/' or our above-mentioned
  // routes to the home-page, letting the router on our SPA front-end handle it.
  // This way, trying to refresh a specific page of the app won't
  // end in a "cannot GET '/part/of/app'" error
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

server.listen(env.port, () => console.log(`App Listening on port ${env.port}`));
