const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  imgUrl: String,
  characters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }],
})

const JewelModel = mongoose.model('Jewel', schema, 'jewels')

module.exports = { JewelModel }