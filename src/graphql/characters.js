const { gql } = require('apollo-server');
const mongoose = require('mongoose');
const { CommonMaterialModel } = require('./commonMaterials.js');
const { JewelModel } = require('./jewels.js');
const { LocalMaterialModel } = require('./localMaterials.js');
const { StoneModel } = require('./stones.js');
const { TalentBookModel } = require('./talentBooks.js');
const { TalentWeeklyModel } = require('./talentWeeklies.js');

const typeDefs = gql`
  extend type Query {
    characterAll: [Character]
    characterByName(name: String!): Character
  }

  type Character {
    "The name of the character"
    name: String
    "The url for the character image on the Honey Impact website"
    imgUrl: String
    "Rarity of the character"
    rarity: Int
    "Element of the character"
    element: String
    "Weapon type that the character uses"
    weaponType: String
    "Common material that the character uses"
    commonMaterial: CommonMaterial
    "Jewel that the character uses"
    jewel: Jewel
    "Local material that the character uses"
    localMaterial: LocalMaterial
    "Elemental stone that the character uses"
    stone: Stone
    "Talent book that the character uses"
    talentBook: TalentBook
    "Talent weekly that the character uses"
    talentWeekly: TalentWeekly
  }
`;

const characterSchema = new mongoose.Schema({
  name: String,
  element: String,
  imgUrl: String,
  rarity: Number,
  weaponType: String,
  commonMaterialId: String,
  jewelId: String,
  localMaterialId: String,
  stoneId: String,
  talentBookId: String,
  talentWeeklyId: String,
});
const CharacterModel = mongoose.model('Character', characterSchema, 'characters');

const resolvers = {
  Query: {
    characterAll: async () => {      
      const characters = await CharacterModel.find({});
      return characters;
    },
    characterByName: async (_, args) => {
      const character = await CharacterModel.findOne({ name: args.name });
      return character;
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

module.exports = { typeDefs, resolvers, CharacterModel }