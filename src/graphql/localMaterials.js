const { gql } = require('apollo-server');

const typeDefs = gql`
  extend type Query {
    localMaterialAll: [LocalMaterial]
    localMaterialByName(name: String!): LocalMaterial
  }

  type LocalMaterial {
    "Name of the localMaterial"
    name: String
    "The url for the localMaterial image on the Honey Impact website"
    imgUrl: String
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