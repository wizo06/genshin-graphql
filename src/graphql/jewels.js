const { gql } = require('apollo-server');

const typeDefs = gql`
  extend type Query {
    jewelAll: [Jewel]
    jewelByName(name: String!): Jewel
  }

  type Jewel {
    "Name of the jewel"
    name: String
    "The url for the jewel image on the Honey Impact website"
    imgUrl: String
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