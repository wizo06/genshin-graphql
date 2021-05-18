const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  imgUrl: String,
  characters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }],
})

const TalentWeeklyModel = mongoose.model('TalentWeekly', schema, 'talentWeeklies')

module.exports = { TalentWeeklyModel }