const { join } = require('path');
const root = process.cwd();

const { StoneModel } = require(join(root, 'src/models/stones/model.js'));

const stonesResolvers = {
  Query: {
    stoneAll: async () => {
      return await StoneModel.find({});
    },
    stoneByName: async (_, args) => {
      return await StoneModel.findOne({ name: args.name });
    }
  },
}

module.exports = { stonesResolvers }