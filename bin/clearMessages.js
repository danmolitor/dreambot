'use strict';
const r = require('rethinkdb');

r.connect({ host: 'localhost', port: 28015 }).then(conn => {
  r.db('test').table('messages').delete()
    .run(conn)
    .then(() => conn.close()
      .then(() => console.log('connection closed')))
    .catch(err => console.error(err));
});
