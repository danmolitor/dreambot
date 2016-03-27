import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { connection, r } from '../utils/rethink';
import { addMessage, fetchMessages, getWordCount, getMessageVolume, getEngagementByUser } from '../actions';

export default function configureStore(initialState) {
  const logger = createLogger({collapsed: true});
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, logger),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  // TODO: move this to a separate file?
  connection
    .then(conn => r.table('messages').changes().run(conn)
      .then(cursor => cursor.each((err, data) => store.dispatch(addMessage(data.new_val))))
    );

  store.dispatch(fetchMessages())
    .then(() => {
      console.log('Fetched all messages from database');
      store.dispatch(getWordCount());
      store.dispatch(getMessageVolume());
      store.dispatch(getEngagementByUser());
    })
    .then(() => {
      console.log('Fetched all words')
      console.log('Fetched message volume');
    })
    .catch((err) => {
      console.log(err);
    });


  return store;
}

