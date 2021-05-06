const { gql } = require('apollo-server');

const talentBooksTypeDefs = gql`
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

module.exports = { talentBooksTypeDefs }