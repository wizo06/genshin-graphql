# honey-impact-graphql

## Collections

**`characters`**

element | jewel       | name   | portrait | rarity | talentBook       | talentWeekly        | weaponType
---     | ---         | ---    | ---      | ---    | ---              | ---                 | ---
string  | ref(jewels) | string | string   | number | ref(talentBooks) | ref(talentWeeklies) | string

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

**`stones`**

name   | portrait
---    | ---
string | string
