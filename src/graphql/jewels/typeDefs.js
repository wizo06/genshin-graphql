const { gql } = require('apollo-server');

const jewelsTypeDefs = gql`
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

module.exports = { jewelsTypeDefs }