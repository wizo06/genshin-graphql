const { CONFIG } = require('./helper/loadConfigFile.js');
const mongoose = require('mongoose');
const logger = require('logger');

const CONNECTION_URI = `mongodb://${CONFIG.mongo.hostname}:${CONFIG.mongo.port}/${CONFIG.mongo.db_name}`;
mongoose.connect(CONNECTION_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
.catch(err => {
  logger.error('Error on initial connection');
  console.log(err);
  process.exit();
});

mongoose.connection.on('error', err => {
  logger.error('Error after initial connection was established');
  console.log(err);
});

mongoose.connection.on('disconnected', () => {
  logger.error('Disconnected from mongodb');
});

mongoose.connection.on('reconnected', () => {
  logger.error('Reconnected to mongodb');
});

mongoose.connection.on('reconnectedFailed', () => {
  logger.error('Reconnection failed');
});

const connectToMongoDB = () => {
  return new Promise((resolve, reject) => {
    mongoose.connection.once('open', () => {
      logger.success(`Connected to mongodb`);
      resolve();
    });
  });
};

module.exports = { connectToMongoDB };