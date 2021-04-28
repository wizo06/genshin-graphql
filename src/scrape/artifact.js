const fetch = require('node-fetch');
const cheerio = require('cheerio');

(async () => {
  const response = await fetch('https://genshin.honeyhunterworld.com/db/artifact/');
  const body = await response.text();
  
  const $ = cheerio.load(body);
  const artifacts = $('tr'); // includes header. each set has two rows.
  console.log(artifacts);
})();