const { gql } = require('apollo-server')

const localMaterialsTypeDefs = gql`
  extend type Query {
    localMaterials(
      "Filter by the local material name"
      name: String
    ): [LocalMaterial]
  }

  type LocalMaterial {
    "Name of the localMaterial"
    name: String
    "The url for the localMaterial image on the Honey Impact website"
    imgUrl: String
    "The characters that use this local material"
    characters: [Character]
  }
`

module.exports = { localMaterialsTypeDefs }