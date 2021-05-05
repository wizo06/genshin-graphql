const { gql } = require('apollo-server');

const typeDefs = gql`
  extend type Query {
    commonMaterialAll: [CommonMaterial]
    commonMaterialByName(name: String!): CommonMaterial
  }

  type CommonMaterial {
    "Name of the commonMaterial"
    name: String
    "The url for the commonMaterial image on the Honey Impact website"
    imgUrl: String
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