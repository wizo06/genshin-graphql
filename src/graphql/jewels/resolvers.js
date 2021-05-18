const { CharacterModel } = require('src/models/characters/model.js')
const { JewelModel } = require('src/models/jewels/model.js')

const jewelsResolvers = {
  Query: {
    jewels: async (_, args) => {
      return await JewelModel.find(args)
    },
  },
  Jewel: { 
    async characters(parent) {
      return await CharacterModel.find({ _id: parent.characters })
    }
  }
}

module.exports = { jewelsResolvers }