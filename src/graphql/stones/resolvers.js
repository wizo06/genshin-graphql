const { CharacterModel } = require('src/models/characters/model.js')
const { StoneModel } = require('src/models/stones/model.js')

const stonesResolvers = {
  Query: {
    stones: async (_, args) => {
      return await StoneModel.find(args)
    },
  },
  Stone: { 
    async characters(parent) {
      return await CharacterModel.find({ _id: parent.characters })
    }
  }
}

module.exports = { stonesResolvers }