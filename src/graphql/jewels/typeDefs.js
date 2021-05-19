const { gql } = require('apollo-server')

const jewelsTypeDefs = gql`
  extend type Query {
    jewels(
      "Filter by the jewel name"
      name: String
    ): [Jewel]
  }

  type Jewel {
    "Name of the jewel"
    name: String
    "The url for the jewel image on the Honey Impact website"
    imgUrl: String
    "The characters that use this jewel"
    characters: [Character]
  }
`

module.exports = { jewelsTypeDefs }