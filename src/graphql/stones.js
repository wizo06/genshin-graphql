const { gql } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = gql`
  extend type Query {
    stoneAll: [Stone]
    stoneByName(name: String!): Stone
  }

  type Stone {
    "Name of the stone"
    name: String
    "The url for the stone image on the Honey Impact website"
    imgUrl: String
  }
`;

const stoneSchema = new mongoose.Schema({
  name: String,
  imgUrl: String,
});
const StoneModel = mongoose.model('Stone', stoneSchema, 'stones');

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

module.exports = { typeDefs, resolvers, StoneModel }