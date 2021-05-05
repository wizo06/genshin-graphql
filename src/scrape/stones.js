const fetch = require('node-fetch');
const cheerio = require('cheerio');

(async () => {
  const serviceAccount = require('../../config/serviceAccountKey.json');
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  const db = admin.firestore();

  const response = await fetch('https://genshin.honeyhunterworld.com/db/item/character-ascension-material-elemental-stone/');
  const body = await response.text();

  const $ = cheerio.load(body);
  const stones = $('div.itemcont');

  stones.each(function (i, ielem) {
    const portrait = $(this).find('img.itempic').first().attr('src') // portrait
    const name = $(this).find('span.itemname').text() // name

    // Store to db
  })
})();