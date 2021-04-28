const fetch = require('node-fetch');
const cheerio = require('cheerio');

(async () => {
  const response = await fetch('https://genshin.honeyhunterworld.com/sword/');
  const body = await response.text();

  const $ = cheerio.load(body);
  const weapons = $('tr'); // skip the first row because it's the header
  console.log(weapons);
})();