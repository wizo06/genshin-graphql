const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  imgUrl: String,
})

const StoneModel = mongoose.model('Stone', schema, 'stones')

module.exports = { StoneModel }
