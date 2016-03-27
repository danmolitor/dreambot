export default {
  port: process.env.PORT || 1337,
  isDev: process.env.NODE_ENV !== 'production',

  // RethinkDb
  rethinkHost: process.env.RETHINK_HOST || 'localhost',
  rethinkPort: process.env.RETHINK_PORT || 28015,
  rethinkDb: process.env.RETHINK_DB || 'test'
};
