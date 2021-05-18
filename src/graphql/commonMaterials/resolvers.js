const { CommonMaterialModel } = require('src/models/commonMaterials/model.js')

const commonMaterialsResolvers = {
  Query: {
    commonMaterials: async (_, args) => {
      return await CommonMaterialModel.find(args)
    },
  },
}

module.exports = { commonMaterialsResolvers }