import r from 'rethinkdb';
import env from './envDefaults';

// TODO: pull connection info from env instead of hardcoding
const connect = () => {
  return r.connect({
    host: env.rethinkHost,
    port: env.rethinkPort,
    db: env.rethinkDb
  });
};

export default connect;