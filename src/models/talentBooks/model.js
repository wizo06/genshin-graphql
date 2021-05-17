const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  imgUrl: String,
})

const TalentBookModel = mongoose.model('TalentBook', schema, 'talentBooks')

module.exports = { TalentBookModel }