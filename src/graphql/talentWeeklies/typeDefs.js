const { gql } = require('apollo-server')

const talentWeekliesTypeDefs = gql`
  extend type Query {
    talentWeeklies(
      "Filter by the talent weekly name"
      name: String
    ): [TalentWeekly]
  }

  type TalentWeekly {
    "Name of the talentWeekly"
    name: String
    "The url for the talentWeekly image on the Honey Impact website"
    imgUrl: String
    "The characters that use this talent weekly"
    characters: [Character]
  }
`

module.exports = { talentWeekliesTypeDefs }