const { gql } = require('apollo-server');
const mongoose = require('mongoose');

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

const localMaterialSchema = new mongoose.Schema({
  name: String,
  imgUrl: String,
});
const LocalMaterialModel = mongoose.model('LocalMaterial', localMaterialSchema, 'localMaterials');

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

module.exports = { typeDefs, resolvers, LocalMaterialModel }