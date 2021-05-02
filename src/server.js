const { ApolloServer, gql } = require('apollo-server');
const admin = require('firebase-admin');
const { readFileSync } = require('fs');
const path = require('path');

const serviceAccount = require(path.join(__dirname, '../config/serviceAccountKey.json'));
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

// The GraphQL schema
const typeDefs = readFileSync(path.join(__dirname, 'schema.graphql')).toString('utf-8');

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    characters: async () => {
      const snapshot = await db.collection('characters').get();
      return snapshot.docs.map(async doc => {
        const newDoc = doc.data();
        newDoc.id = doc.id;
        
        const talentBookSnapshot = await doc.data().talentBook.get();
        newDoc.talentBook = talentBookSnapshot.data();
        newDoc.talentBook.id = talentBookSnapshot.id;

        const stoneSnapshot = await doc.data().stone.get();
        newDoc.stone = stoneSnapshot.data();
        newDoc.stone.id = stoneSnapshot.id;

        const jewelSnapshot = await doc.data().jewel.get();
        newDoc.jewel = jewelSnapshot.data();
        newDoc.jewel.id = jewelSnapshot.id;

        const localMaterialSnapshot = await doc.data().localMaterial.get();
        newDoc.localMaterial = localMaterialSnapshot.data();
        newDoc.localMaterial.id = localMaterialSnapshot.id;

        const commonMaterialSnapshot = await doc.data().commonMaterial.get();
        newDoc.commonMaterial = commonMaterialSnapshot.data();
        newDoc.commonMaterial.id = commonMaterialSnapshot.id;

        const talentWeeklySnapshot = await doc.data().talentWeekly.get();
        newDoc.talentWeekly = talentWeeklySnapshot.data();
        newDoc.talentWeekly.id = talentWeeklySnapshot.id;

        return newDoc;
      });
    },
    talentBooks: async () => {
      const snapshot = await db.collection('talentBooks').get()
      return snapshot.docs.map(doc => {
        const newDoc = doc.data();
        newDoc.id = doc.id;
        return newDoc;
      });
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});