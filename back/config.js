const config = {
    appConfig: {
      port: process.env.APP_PORT || 8080
    },
    db: {
      port: process.env.DB_PORT || 27017,
      host: process.env.DB_HOST || 'mongodb://localhost',
      dbName: process.env.DB_NAME || 'test'
    }
  };
  
  module.exports = config;
  