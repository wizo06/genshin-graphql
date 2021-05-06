const { join } = require('path');
const root = process.cwd();

const { TalentWeeklyModel } = require(join(root, 'src/models/talentWeeklies/model.js'));

const talentWeekliesResolvers = {
  Query: {
    talentWeeklyAll: async () => {
      return await TalentWeeklyModel.find({});
    },
    talentWeeklyByName: async (_, args) => {
      return await TalentWeeklyModel.findOne({ name: args.name });
    }
  },
}

module.exports = { talentWeekliesResolvers }