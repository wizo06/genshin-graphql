const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  imgUrl: String,
});

const CommonMaterialModel = mongoose.model('CommonMaterial', schema, 'commonMaterials');

module.exports = { CommonMaterialModel }