const { JewelModel } = require('src/models/jewels/model.js')

const jewelsResolvers = {
  Query: {
    jewels: async (_, args) => {
      return await JewelModel.find(args)
    },
  },
}

module.exports = { jewelsResolvers }