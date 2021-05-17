const { CONFIG } = require('src/helpers/loadConfigFile.js')
const { ApolloServer, gql } = require('apollo-server')
const { connectToMongoDB } = require('src/mongoose.js')
const logger = require('logger')

// Import typeDefs
const { charactersTypeDefs } = require('src/graphql/characters/typeDefs.js')
const { commonMaterialsTypeDefs } = require('src/graphql/commonMaterials/typeDefs.js')
const { jewelsTypeDefs } = require('src/graphql/jewels/typeDefs.js')
const { localMaterialsTypeDefs } = require('src/graphql/localMaterials/typeDefs.js')
const { stonesTypeDefs } = require('src/graphql/stones/typeDefs.js')
const { talentBooksTypeDefs } = require('src/graphql/talentBooks/typeDefs.js')
const { talentWeekliesTypeDefs } = require('src/graphql/talentWeeklies/typeDefs.js')

// Import resolvers
const { charactersResolvers } = require('src/graphql/characters/resolvers.js')
const { commonMaterialsResolvers } = require('src/graphql/commonMaterials/resolvers.js')
const { jewelsResolvers } = require('src/graphql/jewels/resolvers.js')
const { localMaterialsResolvers } = require('src/graphql/localMaterials/resolvers.js')
const { stonesResolvers } = require('src/graphql/stones/resolvers.js')
const { talentBooksResolvers } = require('src/graphql/talentBooks/resolvers.js')
const { talentWeekliesResolvers } = require('src/graphql/talentWeeklies/resolvers.js')

// Define base typeDef and basee resolver so they can be extended
const typeDefs = gql`type Query { _empty: String }`

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
})

;(async () => {
  await connectToMongoDB()
  server.listen({ port: CONFIG.apollo.port }).then(({ url }) => {
    logger.success(`🚀 ApolloServer ready at ${url}`)
  })
})()
