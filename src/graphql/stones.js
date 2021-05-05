const { gql } = require('apollo-server');

const typeDefs = gql`
  extend type Query {
    stoneAll: [Stone]
    stoneByName(name: String!): Stone
  }

  type Stone {
    "Uniq ue ID of the stone"
    id: String!
    "Name of the stone"
    name: String
    "URL of the portrait of the stone"
    portrait: String
  }
`;

const resolvers = {
  Query: {
    stoneAll: async () => {
      return [{id:  '123'}]
    },
    stoneByName: async (_, args) => {
      return {id: '456'}
    }
  },
}

module.exports = { typeDefs, resolvers }