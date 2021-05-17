const { gql } = require('apollo-server');

const commonMaterialsTypeDefs = gql`
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
`

module.exports = { commonMaterialsTypeDefs }