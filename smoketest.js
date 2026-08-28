const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('file://' + path.resolve(__dirname, 'www/index.html'));
  await page.fill('#inpName', 'Standalone Test');
  const g = await page.$$('#genderGrid .choice-card'); await g[0].click();
  const o = await page.$$('#originGrid .choice-card'); await o[0].click();
  await page.click('#btnBegin');
  const gameVisible = await page.$eval('#view-game', el => !el.classList.contains('hidden'));
  console.log('game screen visible:', gameVisible);
  console.log('errors:', errors.length? errors.join(' | '): 'nenhum');
  await browser.close();
})();
