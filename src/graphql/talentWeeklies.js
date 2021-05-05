const { gql } = require('apollo-server');

const typeDefs = gql`
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
`;

const resolvers = {
  Query: {
    talentWeeklyAll: async () => {
      return [{id:  '123'}]
    },
    talentWeeklyByName: async (_, args) => {
      return {id: '456'}
    }
  },
}

module.exports = { typeDefs, resolvers }