const { TalentBookModel } = require('src/models/talentBooks/model.js')

const talentBooksResolvers = {
  Query: {
    talentBookAll: async () => {
      return await TalentBookModel.find({})
    },
    talentBookByName: async (_, args) => {
      return await TalentBookModel.findOne({ name: args.name })
    }
  },
}

module.exports = { talentBooksResolvers }