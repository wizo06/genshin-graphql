const { gql } = require('apollo-server');

const typeDefs = gql`
  extend type Query {
    localMaterialAll: [LocalMaterial]
    localMaterialByName(name: String!): LocalMaterial
  }

  type LocalMaterial {
    "Uniq ue ID of the localMaterial"
    id: String!
    "Name of the localMaterial"
    name: String
    "URL of the portrait of the localMaterial"
    portrait: String
  }
`;

const resolvers = {
  Query: {
    localMaterialAll: async () => {
      return [{id:  '123'}]
    },
    localMaterialByName: async (_, args) => {
      return {id: '456'}
    }
  },
}

module.exports = { typeDefs, resolvers }