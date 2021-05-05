const { gql } = require('apollo-server');

const typeDefs = gql`
  extend type Query {
    talentWeeklyAll: [TalentWeekly]
    talentWeeklyByName(name: String!): TalentWeekly
  }

  type TalentWeekly {
    "Uniq ue ID of the talentWeekly"
    id: String!
    "Name of the talentWeekly"
    name: String
    "URL of the portrait of the talentWeekly"
    portrait: String
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