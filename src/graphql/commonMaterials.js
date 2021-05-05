const { gql } = require('apollo-server');

const typeDefs = gql`
  extend type Query {
    commonMaterialAll: [CommonMaterial]
    commonMaterialByName(name: String!): CommonMaterial
  }

  type CommonMaterial {
    "Uniq ue ID of the commonMaterial"
    id: String!
    "Name of the commonMaterial"
    name: String
    "URL of the portrait of the commonMaterial"
    portrait: String
  }
`;

const resolvers = {
  Query: {
    commonMaterialAll: async () => {
      return [{id:  '123'}]
    },
    commonMaterialByName: async (_, args) => {
      return {id: '456'}
    }
  },
}

module.exports = { typeDefs, resolvers }