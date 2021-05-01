const fetch = require('node-fetch');
const cheerio = require('cheerio');
const admin = require('firebase-admin');

(async () => {
  const serviceAccount = require('../../config/serviceAccountKey.json');
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  const db = admin.firestore();

  const response = await fetch('https://genshin.honeyhunterworld.com/db/item/character-ascension-material-secondary-material/');
  const body = await response.text();

  const $ = cheerio.load(body);
  const stones = $('div.itemcont');

  stones.each(function (i, ielem) {
    const portrait = $(this).find('img.itempic').first().attr('src') // portrait
    const name = $(this).find('span.itemname').text() // name
    const rarity = $(this).find('div.stars_wrap').length // rarity

    if (rarity !== 3) return;

    const data = {
      name,
      portrait: `https://genshin.honeyhunterworld.com${portrait.replace('_35', '')}`
    }
    db.collection('commonMaterials').add(data)
  })
})();