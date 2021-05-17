const { gql } = require('apollo-server')

const talentWeekliesTypeDefs = gql`
  extend type Query {
    talentWeeklyAll: [TalentWeekly]
    talentWeeklyByName(name: String!): TalentWeekly
  }

  type TalentWeekly {
    "Name of the talentWeekly"
    name: String
    "The url for the talentWeekly image on the Honey Impact website"
    imgUrl: String
  }
`

module.exports = { talentWeekliesTypeDefs }