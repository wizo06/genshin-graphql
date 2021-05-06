const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  imgUrl: String,
});

const TalentWeeklyModel = mongoose.model('TalentWeekly', schema, 'talentWeeklies');

module.exports = { TalentWeeklyModel }