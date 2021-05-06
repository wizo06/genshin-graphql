const { join } = require('path');
const root = process.cwd();

const { CONFIG } = require(join(root, 'src/helpers/loadConfigFile.js'));
const { ApolloServer, gql } = require('apollo-server');
const { connectToMongoDB } = require(join(root, 'src/mongoose.js'));
const logger = require('logger');

// Import typeDefs
const { charactersTypeDefs } = require(join(root, 'src/graphql/characters/typeDefs.js'));
const { commonMaterialsTypeDefs } = require(join(root, 'src/graphql/commonMaterials/typeDefs.js'));
const { jewelsTypeDefs } = require(join(root, 'src/graphql/jewels/typeDefs.js'));
const { localMaterialsTypeDefs } = require(join(root, 'src/graphql/localMaterials/typeDefs.js'));
const { stonesTypeDefs } = require(join(root, 'src/graphql/stones/typeDefs.js'));
const { talentBooksTypeDefs } = require(join(root, 'src/graphql/talentBooks/typeDefs.js'));
const { talentWeekliesTypeDefs } = require(join(root, 'src/graphql/talentWeeklies/typeDefs.js'));

// Import resolvers
const { charactersResolvers } = require(join(root, 'src/graphql/characters/resolvers.js'));
const { commonMaterialsResolvers } = require(join(root, 'src/graphql/commonMaterials/resolvers.js'));
const { jewelsResolvers } = require(join(root, 'src/graphql/jewels/resolvers.js'));
const { localMaterialsResolvers } = require(join(root, 'src/graphql/localMaterials/resolvers.js'));
const { stonesResolvers } = require(join(root, 'src/graphql/stones/resolvers.js'));
const { talentBooksResolvers } = require(join(root, 'src/graphql/talentBooks/resolvers.js'));
const { talentWeekliesResolvers } = require(join(root, 'src/graphql/talentWeeklies/resolvers.js'));

// Define base typeDef and basee resolver so they can be extended
const typeDefs = gql`type Query { _empty: String }`;

// Create an Apollo server with the imported typedefs and resolvers
const server = new ApolloServer({
  typeDefs: [
    typeDefs, 
    charactersTypeDefs, 
    commonMaterialsTypeDefs,
    jewelsTypeDefs,
    localMaterialsTypeDefs,
    stonesTypeDefs,
    talentBooksTypeDefs,
    talentWeekliesTypeDefs
  ],
  resolvers: [
    charactersResolvers, 
    commonMaterialsResolvers,
    jewelsResolvers,
    localMaterialsResolvers,
    stonesResolvers,
    talentBooksResolvers,
    talentWeekliesResolvers
  ],
});

(async () => {
  await connectToMongoDB();
  server.listen({ port: CONFIG.apollo.port }).then(({ url }) => {
    logger.success(`🚀 ApolloServer ready at ${url}`);
  });
})();
