require('dotenv').config()
const app = require('./app')
const connectDb = require('./db/mongodb')
const { appConfig, db }=require('./config')


const port = process.env.PORT || appConfig.port;

connectDb(db)
app.listen(port, () => console.log(`Server is running on port ${port}`));