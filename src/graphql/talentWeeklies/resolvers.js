const { TalentWeeklyModel } = require('src/models/talentWeeklies/model.js')

const talentWeekliesResolvers = {
  Query: {
    talentWeeklyAll: async () => {
      return await TalentWeeklyModel.find({})
    },
    talentWeeklyByName: async (_, args) => {
      return await TalentWeeklyModel.findOne({ name: args.name })
    }
  },
}

module.exports = { talentWeekliesResolvers }