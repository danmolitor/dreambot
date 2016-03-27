import r from 'rethinkdb';
import sentiment from 'sentiment';
import _ from 'lodash';
import connect from '../utils/connect';

export default {

  storeMessage: (msg, cb) => {
    console.log('saving message');

    let allData = _.extend(msg, sentiment(msg.text));

    connect()
      .then(conn => {
        r.table('messages').insert(allData).run(conn)
          .then(res => {
            console.log('saving message and anaylizing message');
            console.log(sentiment(msg.text));
            console.log('categorizing messages...')
            console.log(res);
          });
      })
      .catch(err => {
        console.log(err);
      });
  },
  storeUser: (user, cb) => {
    connect()
      .then(conn => {
        r.table('users').insert(user).run(conn)
          .then(res => {
          });
      })
      .catch(err => {
        console.log(err);
      })
  },
  updateUser: (user, cb) => {
    let name = user.name;
    connect()
      .then(conn => {
        r.table('users').filter({name: name}).update({dnd: true}).run(conn)
          .then(res => {
          });
      })
      .catch(err => {
        console.log(err);
      })
  },
  checkUser: (user, cb) => {
    let name = user.name;
      connect()
      .then(conn => {
        var user = r.table('users').filter({name: name}).run(conn)
          .then(cursor => {
            cursor.toArray().then(result => {
              cb(result[0].dnd);
            });
          });
      })
      .catch(err => {
        console.log(err);
      })
    },
  subscribeUser: (user) => {
    let name = user.name;
    connect()
      .then(conn => {
        r.table('users').filter({name: name}).update({dnd: false}).run(conn)
          .then(res => {
          });
      })
      .catch(err => {
        console.log(err);
      })
  }
}
