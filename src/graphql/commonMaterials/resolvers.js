const { CharacterModel } = require('src/models/characters/model.js')
const { CommonMaterialModel } = require('src/models/commonMaterials/model.js')

const commonMaterialsResolvers = {
  Query: {
    commonMaterials: async (_, args) => {
      return await CommonMaterialModel.find(args)
    },
  },
  CommonMaterial: { 
    async characters(parent) {
      return await CharacterModel.find({ _id: parent.characters })
    }
  }
}

module.exports = { commonMaterialsResolvers }