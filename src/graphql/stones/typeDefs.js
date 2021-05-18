const { gql } = require('apollo-server')

const stonesTypeDefs = gql`
  extend type Query {
    stones(
      name: String
    ): [Stone]
  }

  type Stone {
    "Name of the stone"
    name: String
    "The url for the stone image on the Honey Impact website"
    imgUrl: String
  }
`

module.exports = { stonesTypeDefs }