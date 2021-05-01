# honey-impact-graphql

## Collections

**`characters`**

key | datatype
--- | ---
commonMaterial | ref(commonMaterials)
element | string
jewel | ref(jewels)
localMaterial | ref(localMaterials)
name | string
portrait | string
stone | ref(stones)
rarity | number
talentBook | ref(talentBooks)
talentWeekly | ref(talentWeeklies)
weaponType | string

**`talentBooks`**

key | datatype
--- | ---
name | string
portrait | string

**`talentWeeklies`**

key | datatype
--- | ---
name | string
portrait | string

**`jewels`**

key | datatype
--- | ---
name | string
portrait | string

**`stones`**

key | datatype
--- | ---
name | string
portrait | string

**`commonMaterials`**

key | datatype
--- | ---
name | string
portrait | string

**`localMaterials`**

key | datatype
--- | ---
name | string
portrait | string
