const { CharacterModel } = require('src/models/characters/model.js')
const { TalentWeeklyModel } = require('src/models/talentWeeklies/model.js')

const talentWeekliesResolvers = {
  Query: {
    talentWeeklies: async (_, args) => {
      return await TalentWeeklyModel.find(args)
    }
  },
  TalentWeekly: { 
    async characters(parent) {
      return await CharacterModel.find({ _id: parent.characters })
    }
  }
}

module.exports = { talentWeekliesResolvers }