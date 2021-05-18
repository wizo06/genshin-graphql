const { TalentWeeklyModel } = require('src/models/talentWeeklies/model.js')

const talentWeekliesResolvers = {
  Query: {
    talentWeeklies: async (_, args) => {
      return await TalentWeeklyModel.findOne(args)
    }
  },
}

module.exports = { talentWeekliesResolvers }