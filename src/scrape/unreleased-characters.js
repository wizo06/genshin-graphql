const fetch = require('node-fetch');
const cheerio = require('cheerio');

(async () => {
  const response = await fetch('https://genshin.honeyhunterworld.com/db/char/unreleased-and-upcoming-characters/');
  const body = await response.text();

  const $ = cheerio.load(body);
  const characters = $('div.char_sea_cont');
  console.log(characters);
})();