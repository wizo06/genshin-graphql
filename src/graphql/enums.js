const { gql } = require('apollo-server')

const enums = gql`
  enum WeaponType {
    SWORD
    CLAYMORE
    POLEARM
    BOW
    CATALYST
  }
`

module.exports = { enums }