const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  element: String,
  imgUrl: String,
  rarity: Number,
  weaponType: String,
  commonMaterial: { type: mongoose.Schema.Types.ObjectId, ref: 'CommonMaterial' },
  jewel: { type: mongoose.Schema.Types.ObjectId, ref: 'Jewel' },
  localMaterial: { type: mongoose.Schema.Types.ObjectId, ref: 'LocalMaterial' },
  stone: { type: mongoose.Schema.Types.ObjectId, ref: 'Stone' },
  talentBook: { type: mongoose.Schema.Types.ObjectId, ref: 'TalentBook' },
  talentWeekly: { type: mongoose.Schema.Types.ObjectId, ref: 'TalentWeekly' },
})

const CharacterModel = mongoose.model('Character', schema, 'characters')

module.exports = { CharacterModel }