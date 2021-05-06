const { ApolloServer, gql } = require('apollo-server');
const { CONFIG } = require('./helper/loadConfigFile.js');
const { connectToMongoDB } = require('./mongodb.js');
const logger = require('logger');

// Import typeDefs
const { typeDefs: characterQueries } = require('./graphql/characters.js');
const { typeDefs: commonMaterialQueries } = require('./graphql/commonMaterials.js');
const { typeDefs: jewelQueries } = require('./graphql/jewels.js');
const { typeDefs: localMaterialQueries } = require('./graphql/localMaterials.js');
const { typeDefs: stoneQueries } = require('./graphql/stones.js');
const { typeDefs: talentBookQueries } = require('./graphql/talentBooks.js');
const { typeDefs: talentWeeklyQueries } = require('./graphql/talentWeeklies.js');

// Import resolvers
const { resolvers: characterResolvers } = require('./graphql/characters.js');
const { resolvers: commonMaterialResolvers } = require('./graphql/characters.js');
const { resolvers: jewelResolvers } = require('./graphql/characters.js');
const { resolvers: localMaterialResolvers } = require('./graphql/characters.js');
const { resolvers: stoneResolvers } = require('./graphql/characters.js');
const { resolvers: talentBookResolvers } = require('./graphql/characters.js');
const { resolvers: talentWeeklyResolvers } = require('./graphql/characters.js');

// Define base typeDef and basee resolver so they can be extended
const typeDefs = gql`
  type Query {
    _empty: String
  }
`;
const resolvers = {};

// Create an Apollo server with the imported typedefs and resolvers
const server = new ApolloServer({
  typeDefs: [
    typeDefs, 
    characterQueries, 
    commonMaterialQueries,
    jewelQueries,
    localMaterialQueries,
    stoneQueries,
    talentBookQueries,
    talentWeeklyQueries
  ],
  resolvers: [
    resolvers,
    characterResolvers, 
    commonMaterialResolvers,
    jewelResolvers,
    localMaterialResolvers,
    stoneResolvers,
    talentBookResolvers,
    talentWeeklyResolvers
  ],
});

(async () => {
  await connectToMongoDB();
  server.listen({ port: CONFIG.apollo.port }).then(({ url }) => {
    logger.success(`🚀 ApolloServer ready at ${url}`);
  });
})();
