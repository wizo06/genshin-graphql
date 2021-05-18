const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  imgUrl: String,
  characters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }],
})

const CommonMaterialModel = mongoose.model('CommonMaterial', schema, 'commonMaterials')

module.exports = { CommonMaterialModel }