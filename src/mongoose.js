const { mongo } = require('src/helpers/loadConfigFile.js')
const mongoose = require('mongoose')
const logger = require('logger')

let URI
if (mongo.protocol === 'mongodb+srv') {
  // MongoDB Atlas
  URI = `${mongo.protocol}://${mongo.username}:${mongo.password}@${mongo.hostname}/${mongo.db_name}`
}
else if (mongo.protocol === 'mongodb') {
  // Local MongoDB
  URI = `${mongo.protocol}://${mongo.hostname}:${mongo.port}/${mongo.db_name}`
}
else {
  logger.error('Invalid protocol')
  logger.error('Use either "mongodb+srv" or "mongodb"')
  process.exit()
}

mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology: true })
.catch(err => {
  logger.error('Error on initial connection')
  logger.error(err)
  process.exit()
})

mongoose.connection.on('error', err => {
  logger.error('Error event')
  logger.error(err)
})

mongoose.connection.on('disconnected', () => {
  logger.error('Disconnected from mongodb')
})

mongoose.connection.on('reconnected', () => {
  logger.error('Reconnected to mongodb')
})

mongoose.connection.on('reconnectedFailed', () => {
  logger.error('Reconnection failed')
})

const connectToMongoDB = () => {
  return new Promise((resolve, reject) => {
    mongoose.connection.once('open', () => {
      logger.success(`Connected to mongodb`)
      resolve()
    })
  })
}

module.exports = { connectToMongoDB }