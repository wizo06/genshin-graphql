const { join } = require('path');
const root = process.cwd();

const { LocalMaterialModel } = require(join(root, 'src/models/localMaterials/model.js'));

const localMaterialsResolvers = {
  Query: {
    localMaterialAll: async () => {
      return await LocalMaterialModel.find({});
    },
    localMaterialByName: async (_, args) => {
      return await LocalMaterialModel.findOne({ name: args.name });
    }
  },
}

module.exports = { localMaterialsResolvers }