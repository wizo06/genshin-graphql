const fetch = require('node-fetch');
const cheerio = require('cheerio');

(async () => {
  const response = await fetch('https://genshin.honeyhunterworld.com/db/item/talent-level-up-material/');
  const body = await response.text();

  const $ = cheerio.load(body);
  const talentLevelUpMaterials = $('div.itemcont');
  console.log(talentLevelUpMaterials);
})();