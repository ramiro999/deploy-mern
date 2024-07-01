require('dotenv').config();
const app = require('./app');
const connectDb = require('./db/mongodb');
const { appConfig, db } = require('./config');

const port = process.env.PORT || appConfig.port;

connectDb(db)
  .then(() => {
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit process with failure
  });