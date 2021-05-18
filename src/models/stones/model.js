const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  imgUrl: String,
  characters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }],
})

const StoneModel = mongoose.model('Stone', schema, 'stones')

module.exports = { StoneModel }
