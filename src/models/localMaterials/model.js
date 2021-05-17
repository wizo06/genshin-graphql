const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  imgUrl: String,
})

const LocalMaterialModel = mongoose.model('LocalMaterial', schema, 'localMaterials')

module.exports = { LocalMaterialModel }