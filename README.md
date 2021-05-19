# What is this?

Unofficial GraphQL API for [https://genshin.honeyhunterworld.com/](https://genshin.honeyhunterworld.com/).

# Motivation

As far as I know, there isn't an official API so I made one myself.

# Limitations

## Updates (or lack there of)

Data was scraped from the website to populate the database when I first started this project. This means that the database will not necessarily reflect new data from the website unless I manually add the new data to the database. As of writing this README, I don't have anything setup yet for contributors to help keep the database up-to-date.

## Incompleteness

Another limitation is that the database does not contain all entities, nor does each entity have all information about it.

For example, the entity "Domains" is not in the database.

Another example is that, the entity "Characters" is in the database, but not everything about a character is in the database, such as birthday, voice actor, skills, constellations, story, etc.

Those "missing" entities and/or information might be added in the future, if I consider them to be important and/or relevant.

What are my criteria for "important" and "relevant"? My expectation of this API is to be used to build *practical* services or tools. For example, [this Google Spreadsheet](https://genshin-sched.web.app/) that I made. Therefore, information such as character birthday or character story are not relevant.

Contributors are welcomed to add those "missing" entities and/or information once I setup something for it.

# Specs

- Endpoint URL: `https://genshin.sourcies.dev/graphql`
- Method: `POST`

Tip: you can also navigate to [https://genshin.sourcies.dev/graphql](https://genshin.sourcies.dev/graphql) on your browser to explore the schema with the GraphQL Playground.

# Development

Requirements:

- Node.js
- npm 7.x or later

To get a local server running:

```
git clone https://github.com/wizo06/honey-impact-graphql.git
cd honey-impact-graphql
cp config/templatetoml config/user_config.toml
npm i
npm run dev
```