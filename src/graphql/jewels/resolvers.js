const { join } = require('path');
const root = process.cwd();

const { JewelModel } = require(join(root, 'src/models/jewels/model.js'));

const jewelsResolvers = {
  Query: {
    jewelAll: async () => {
      return await JewelModel.find({});
    },
    jewelByName: async (_, args) => {
      return await JewelModel.findOne({ name: args.name });
    }
  },
}

module.exports = { jewelsResolvers }