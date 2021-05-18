const { gql } = require('apollo-server')

const charactersTypeDefs = gql`
  extend type Query {
    characters(
      name: String
      rarity: Int
      element: Element
      weaponType: WeaponType
    ): [Character]
  }

  type Character {
    "The name of the character"
    name: String
    "The url for the character image on the Honey Impact website"
    imgUrl: String
    "Rarity of the character"
    rarity: Int
    "Element of the character"
    element: Element
    "Weapon type that the character uses"
    weaponType: WeaponType
    "Common material that the character uses"
    commonMaterial: CommonMaterial
    "Jewel that the character uses"
    jewel: Jewel
    "Local material that the character uses"
    localMaterial: LocalMaterial
    "Elemental stone that the character uses"
    stone: Stone
    "Talent book that the character uses"
    talentBook: TalentBook
    "Talent weekly that the character uses"
    talentWeekly: TalentWeekly
  }
`

module.exports = { charactersTypeDefs }