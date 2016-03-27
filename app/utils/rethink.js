import RethinkdbWebsocketClient from 'rethinkdb-websocket-client';

// https://github.com/mikemintz/rethinkdb-websocket-client/tree/master/examples/tutorial
// Open a WebSocket connection to the server to send RethinkDB queries over
const options = {
  host: RETHINK_HOST, // hostname of the websocket server
  port: PORT,        // port number of the websocket server
  path: '/db',       // HTTP path to websocket route
  secure: false,     // set true to use secure TLS websockets
  db: 'test',        // default database, passed to rethinkdb.connect
};

export const connection = RethinkdbWebsocketClient.connect(options);
export const r = RethinkdbWebsocketClient.rethinkdb;
