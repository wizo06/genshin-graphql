const fetch = require('node-fetch');
const cheerio = require('cheerio');

(async () => {
  const response = await fetch('https://genshin.honeyhunterworld.com/db/item/character-ascension-material-secondary-material/');
  const body = await response.text();

  const $ = cheerio.load(body);
  const stones = $('div.itemcont');

  stones.each(function (i, ielem) {
    const portrait = $(this).find('img.itempic').first().attr('src') // portrait
    const name = $(this).find('span.itemname').text() // name
    const rarity = $(this).find('div.stars_wrap').length // rarity

    if (rarity !== 3) return;

    // Store to db
  })
})();