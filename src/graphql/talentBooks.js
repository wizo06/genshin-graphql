const { gql } = require('apollo-server');

const typeDefs = gql`
  extend type Query {
    talentBookAll: [TalentBook]
    talentBookByName(name: String!): TalentBook
  }

  type TalentBook {
    "Uniq ue ID of the talentBook"
    id: String!
    "Name of the talentBook"
    name: String
    "URL of the portrait of the talentBook"
    portrait: String
  }
`;

const resolvers = {
  Query: {
    talentBookAll: async () => {
      return [{id:  '123'}]
    },
    talentBookByName: async (_, args) => {
      return {id: '456'}
    }
  },
}

module.exports = { typeDefs, resolvers }