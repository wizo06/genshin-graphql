const { join } = require('path');
const root = process.cwd();

const { TalentBookModel } = require(join(root, 'src/models/talentBooks/model.js'));

const talentBooksResolvers = {
  Query: {
    talentBookAll: async () => {
      return await TalentBookModel.find({});
    },
    talentBookByName: async (_, args) => {
      return await TalentBookModel.findOne({ name: args.name });
    }
  },
}

module.exports = { talentBooksResolvers }