# honey-impact-graphql

## Collections

**`characters`**

element | name   | portrait | rarity | talentBook       | talentWeekly        | weaponType
---     | ---    | ---      | ---    | ---              | ---                 | ---
string  | string | string   | number | ref(talentBooks) | ref(talentWeeklies) | string

**`talentBooks`**

name   | portrait
---    | ---
string | string

**`talentWeeklies`**

name   | portrait
---    | ---
string | string

**`jewels`**

name   | portrait
---    | ---
string | string
