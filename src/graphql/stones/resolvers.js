const { StoneModel } = require('src/models/stones/model.js')

const stonesResolvers = {
  Query: {
    stones: async (_, args) => {
      return await StoneModel.find(args)
    },
  },
}

module.exports = { stonesResolvers }