const { gql } = require('apollo-server');

const typeDefs = gql`
  extend type Query {
    characterAll: [Character]
    characterByName(name: String!): Character
  }

  type Character {
    "Unique ID of the character"
    id: String!
    "Name of the character"
    name: String
    "URL of portrait of the character"
    portrait: String
    "Rarity of the character"
    rarity: Int
    "Element of the character"
    element: String
    "Weapon type that the character uses"
    weaponType: String
    "Talent book that the character uses"
    talentBook: TalentBook
    "Elemental stone that the character uses"
    stone: Stone
    "Jewel that the character uses"
    jewel: Jewel
    "Local material that the character uses"
    localMaterial: LocalMaterial
    "Common material that the character uses"
    commonMaterial: CommonMaterial
    "Talent weekly that the character uses"
    talentWeekly: TalentWeekly
  }
`;

const resolvers = {
  Query: {
    characterAll: async () => {
      return [{id:  '123', name: 'charname'}]
    },
    characterByName: async (_, args) => {
      return {id: '456', name: args.name }
    }
  },
  Character: {
    talentBook(parent) {
      return {id: 'asdf', name: 'namee?'}
    }
  }
}

module.exports = { typeDefs, resolvers }