const fetch = require('node-fetch');
const cheerio = require('cheerio');

(async () => {
  const response = await fetch('https://genshin.honeyhunterworld.com/db/char/characters/');
  // const response = await fetch('https://genshin.honeyhunterworld.com/db/char/unreleased-and-upcoming-characters/');
  const body = await response.text();
  
  const $ = cheerio.load(body);
  const characters = $('div.char_sea_cont');
  
  characters.each(function (i, ielem) { 
    const element = $(this).find('img.char_portrait_card_sea_element').attr('src') // element link
    const portrait = $(this).find('img.char_portrait_card_sea').attr('src') // portrait link
    const rarity = $(this).find('div.sea_char_stars_wrap').length // rarity
    const name = $(this).find('span.sea_charname').text() // name
    const weaponType = $(this).find('img.sea_weptype_element').attr('src') // weapon link

    const ascensionMaterials = $(this).find('div.sea_char_mat_cont').find('a')

    const talentBook = ascensionMaterials.eq(0).find('img').attr('src') // talentBook
    const stone = ascensionMaterials.eq(1).find('img').attr('src') // stone
    const jewel = ascensionMaterials.eq(2).find('img').attr('src') // gem
    const localMaterial = ascensionMaterials.eq(3).find('img').attr('src') // localSpecialty
    const commonMaterial = ascensionMaterials.eq(4).find('img').attr('src') // monsterDrop
    const talentWeekly = ascensionMaterials.eq(5).find('img').attr('src') // weekly

    if (name.includes('Traveler')) return;

    // Store to db
  })
})();