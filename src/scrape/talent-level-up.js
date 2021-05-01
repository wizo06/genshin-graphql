const fetch = require('node-fetch');
const cheerio = require('cheerio');
const admin = require('firebase-admin');

(async () => {
  const serviceAccount = require('../../config/serviceAccountKey.json');
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  const db = admin.firestore();
  
  const response = await fetch('https://genshin.honeyhunterworld.com/db/item/talent-level-up-material/');
  const body = await response.text();

  const $ = cheerio.load(body);
  const talentLevelUpMaterials = $('div.itemcont');
  
  talentLevelUpMaterials.each(function (i, ielem) {
    const portrait = $(this).find('img.itempic').first().attr('src') // portrait
    const name =  $(this).find('span.itemname').text() // name
    const rarity = $(this).find('div.stars_wrap').length // rarity

    if (rarity !== 4) return;

    const data= {
      name: name.replace('Philosophies of ', ''),
      portrait: `https://genshin.honeyhunterworld.com${portrait.replace('_35', '')}`
    }
    db.collection('talentBooks').add(data)
  })

  talentLevelUpMaterials.each(function (i, ielem) {
    const portrait = $(this).find('img.itempic').first().attr('src') // portrait
    const name = $(this).find('span.itemname').text() // name
    const rarity = $(this).find('div.stars_wrap').length // rarity

    if (rarity !== 5) return;

    const data = {
      name: name,
      portrait: `https://genshin.honeyhunterworld.com${portrait.replace('_35', '')}`
    }
    db.collection('talentWeeklies').add(data)
  })
})();