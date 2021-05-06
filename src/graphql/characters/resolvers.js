const { join } = require('path');
const root = process.cwd();

const { CharacterModel } = require(join(root, 'src/models/characters/model.js'));
const { CommonMaterialModel } = require(join(root, 'src/models/commonMaterials/model.js'));
const { JewelModel } = require(join(root, 'src/models/jewels/model.js'));
const { LocalMaterialModel } = require(join(root, 'src/models/localMaterials/model.js'));
const { StoneModel } = require(join(root, 'src/models/stones/model.js'));
const { TalentBookModel } = require(join(root, 'src/models/talentBooks/model.js'));
const { TalentWeeklyModel } = require(join(root, 'src/models/talentWeeklies/model.js'));

const charactersResolvers = {
  Query: {
    characterAll: async () => {      
      return await CharacterModel.find({});
    },
    characterByName: async (_, args) => {
      return await CharacterModel.findOne({ name: args.name });
    }
  },
  Character: {
    async commonMaterial(parent) {
      return await CommonMaterialModel.findOne({ _id: parent.commonMaterialId });
    },
    async jewel(parent) {
      return await JewelModel.findOne({ _id: parent.jewelId });
    },
    async localMaterial(parent) {
      return await LocalMaterialModel.findOne({ _id: parent.localMaterialId });
    },
    async stone(parent) {
      return await StoneModel.findOne({ _id: parent.stoneId });
    },
    async talentBook(parent) {
      return await TalentBookModel.findOne({ _id: parent.talentBookId });
    },
    async talentWeekly(parent) {
      return await TalentWeeklyModel.findOne({ _id: parent.talentWeeklyId });
    },
  }
}

module.exports = { charactersResolvers }