const { gql } = require('apollo-server');

const typeDefs = gql`
  extend type Query {
    jewelAll: [Jewel]
    jewelByName(name: String!): Jewel
  }

  type Jewel {
    "Uniq ue ID of the jewel"
    id: String!
    "Name of the jewel"
    name: String
    "URL of the portrait of the jewel"
    portrait: String
  }
`;

const resolvers = {
  Query: {
    jewelAll: async () => {
      return [{id:  '123'}]
    },
    jewelByName: async (_, args) => {
      return {id: '456'}
    }
  },
}

module.exports = { typeDefs, resolvers }