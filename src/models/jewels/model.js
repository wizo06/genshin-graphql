const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  imgUrl: String,
});

const JewelModel = mongoose.model('Jewel', schema, 'jewels');

module.exports = { JewelModel }