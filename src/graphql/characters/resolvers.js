const { CharacterModel } = require('src/models/characters/model.js')
const { CommonMaterialModel } = require('src/models/commonMaterials/model.js')
const { JewelModel } = require('src/models/jewels/model.js')
const { LocalMaterialModel } = require('src/models/localMaterials/model.js')
const { StoneModel } = require('src/models/stones/model.js')
const { TalentBookModel } = require('src/models/talentBooks/model.js')
const { TalentWeeklyModel } = require('src/models/talentWeeklies/model.js')

const charactersResolvers = {
  Query: {
    characters: async (_, args) => {
      return await CharacterModel.find(args)
    },
  },
  Character: {
    async commonMaterial(parent) {
      return await CommonMaterialModel.findOne({ _id: parent.commonMaterial })
    },
    async jewel(parent) {
      return await JewelModel.findOne({ _id: parent.jewel })
    },
    async localMaterial(parent) {
      return await LocalMaterialModel.findOne({ _id: parent.localMaterial })
    },
    async stone(parent) {
      return await StoneModel.findOne({ _id: parent.stone })
    },
    async talentBook(parent) {
      return await TalentBookModel.findOne({ _id: parent.talentBook })
    },
    async talentWeekly(parent) {
      return await TalentWeeklyModel.findOne({ _id: parent.talentWeekly })
    },
  }
}

module.exports = { charactersResolvers }