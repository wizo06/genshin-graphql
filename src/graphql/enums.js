const { gql } = require('apollo-server')

const enums = gql`
  enum WeaponType {
    SWORD
    CLAYMORE
    POLEARM
    BOW
    CATALYST
  }

  enum Element {
    PYRO
    HYDRO
    ELECTRO
    CRYO
    ANEMO
    GEO
    DENDRO
  }
`

module.exports = { enums }