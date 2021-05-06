const { gql } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = gql`
  extend type Query {
    talentBookAll: [TalentBook]
    talentBookByName(name: String!): TalentBook
  }

  type TalentBook {
    "Name of the talentBook"
    name: String
    "The url for the talentBook image on the Honey Impact website"
    imgUrl: String
  }
`;

const talentBookSchema = new mongoose.Schema({
  name: String,
  imgUrl: String,
});
const TalentBookModel = mongoose.model('TalentBook', talentBookSchema, 'talentBooks');

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

module.exports = { typeDefs, resolvers, TalentBookModel }