const { StoneModel } = require('src/models/stones/model.js')

const stonesResolvers = {
  Query: {
    stoneAll: async () => {
      return await StoneModel.find({})
    },
    stoneByName: async (_, args) => {
      return await StoneModel.findOne({ name: args.name })
    }
  },
}

module.exports = { stonesResolvers }