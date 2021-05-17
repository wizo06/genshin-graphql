const { CommonMaterialModel } = require('src/models/commonMaterials/model.js')

const commonMaterialsResolvers = {
  Query: {
    commonMaterialAll: async () => {
      return await CommonMaterialModel.find({})
    },
    commonMaterialByName: async (_, args) => {
      return await CommonMaterialModel.findOne({ name: args.name })
    }
  },
}

module.exports = { commonMaterialsResolvers }