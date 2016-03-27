'use strict';
const r = require('rethinkdb');
let testMessages = require('../data/testMessages.json');

testMessages = testMessages.map(message =>
  Object.assign(message, {
    ts: new Date(message.ts),
    score: Number(message.score)
  })
);

r.connect({ host: 'localhost', port: 28015 }).then(conn => {
  r.db('test').table('messages').insert(testMessages)
    .run(conn)
    .then(() => conn.close()
      .then(() => console.log('connection closed')))
    .catch(err => console.error(err));
});
