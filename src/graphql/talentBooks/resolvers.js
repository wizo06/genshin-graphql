const { TalentBookModel } = require('src/models/talentBooks/model.js')

const talentBooksResolvers = {
  Query: {
    talentBook: async (_, args) => {
      return await TalentBookModel.find(args)
    },
  },
}

module.exports = { talentBooksResolvers }