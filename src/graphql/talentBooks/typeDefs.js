const { gql } = require('apollo-server')

const talentBooksTypeDefs = gql`
  extend type Query {
    talentBooks(
      name: String
    ): [TalentBook]
  }

  type TalentBook {
    "Name of the talentBook"
    name: String
    "The url for the talentBook image on the Honey Impact website"
    imgUrl: String
    "The characters that use this talent book"
    characters: [Character]
  }
`

module.exports = { talentBooksTypeDefs }