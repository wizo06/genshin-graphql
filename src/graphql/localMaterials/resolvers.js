const { CharacterModel } = require('src/models/characters/model.js')
const { LocalMaterialModel } = require('src/models/localMaterials/model.js')

const localMaterialsResolvers = {
  Query: {
    localMaterials: async (_, args) => {
      return await LocalMaterialModel.find(args)
    },
  },
  LocalMaterial: { 
    async characters(parent) {
      return await CharacterModel.find({ _id: parent.characters })
    }
  }
}

module.exports = { localMaterialsResolvers }