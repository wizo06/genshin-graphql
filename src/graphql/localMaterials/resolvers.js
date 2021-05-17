const { LocalMaterialModel } = require('src/models/localMaterials/model.js')

const localMaterialsResolvers = {
  Query: {
    localMaterialAll: async () => {
      return await LocalMaterialModel.find({})
    },
    localMaterialByName: async (_, args) => {
      return await LocalMaterialModel.findOne({ name: args.name })
    }
  },
}

module.exports = { localMaterialsResolvers }