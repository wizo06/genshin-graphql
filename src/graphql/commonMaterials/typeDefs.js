const { gql } = require('apollo-server');

const commonMaterialsTypeDefs = gql`
  extend type Query {
    commonMaterials(
      name: String
    ): [CommonMaterial]
  }

  type CommonMaterial {
    "Name of the commonMaterial"
    name: String
    "The url for the commonMaterial image on the Honey Impact website"
    imgUrl: String
    "The characters that use this common material"
    characters: [Character]
  }
`

module.exports = { commonMaterialsTypeDefs }