# honey-impact-graphql

## Collections

**`characters`**

element | name   | portrait | rarity | talentBook              | talentWeekly                 | weaponType
---     | ---    | ---      | ---    | ---                     | ---                          | ---
string  | string | string   | number | reference(talentBooks)  | reference(talentWeeklies)    | string

**`talentBooks`**

name   | portrait
---    | ---
string | string

**`talentWeeklies`**

name   | portrait
---    | ---
string | string
