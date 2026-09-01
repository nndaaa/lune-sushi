const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  for (const [w,h,out] of [[1440,900,'/tmp/lune_desktop.png'],[390,844,'/tmp/lune_mobile.png']]){
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    const pg = await ctx.newPage();
    await pg.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
    await pg.waitForTimeout(800);
    await pg.screenshot({ path: out, fullPage: true });
    await ctx.close();
  }
  await browser.close();
  console.log('done');
})();