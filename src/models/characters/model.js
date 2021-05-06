const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  element: String,
  imgUrl: String,
  rarity: Number,
  weaponType: String,
  commonMaterialId: String,
  jewelId: String,
  localMaterialId: String,
  stoneId: String,
  talentBookId: String,
  talentWeeklyId: String,
});

const CharacterModel = mongoose.model('Character', schema, 'characters');

module.exports = { CharacterModel };