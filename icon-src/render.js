const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 512, height: 512 } });
  await page.goto('file://' + path.resolve(__dirname, 'icon.html'));
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'preview_512.png' });
  await browser.close();
})();
