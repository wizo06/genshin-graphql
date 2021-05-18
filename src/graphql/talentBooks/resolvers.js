const { CharacterModel } = require('src/models/characters/model.js')
const { TalentBookModel } = require('src/models/talentBooks/model.js')

const talentBooksResolvers = {
  Query: {
    talentBooks: async (_, args) => {
      return await TalentBookModel.find(args)
    },
  },
  TalentBook: { 
    async characters(parent) {
      return await CharacterModel.find({ _id: parent.characters })
    }
  }
}

module.exports = { talentBooksResolvers }