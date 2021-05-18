const { LocalMaterialModel } = require('src/models/localMaterials/model.js')

const localMaterialsResolvers = {
  Query: {
    localMaterials: async (_, args) => {
      return await LocalMaterialModel.find(args)
    },
  },
}

module.exports = { localMaterialsResolvers }