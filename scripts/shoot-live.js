const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  for (const [w,h,out] of [[1440,900,'/tmp/lune_live_desktop.png'],[390,844,'/tmp/lune_live_mobile.png']]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    const pg = await ctx.newPage();
    pg.on('console', m => console.log(`[console:${m.type()}]`, m.text()));
    pg.on('requestfailed', r => console.log('[reqfailed]', r.url(), r.failure() && r.failure().errorText));
    pg.on('response', r => {
      const s = r.status();
      if (s >= 400) console.log('[bad]', s, r.url());
    });
    await pg.goto('https://nndaaa.github.io/lune-sushi/', { waitUntil: 'networkidle' });
    await pg.waitForTimeout(1500);
    const probe = await pg.evaluate(() => {
      const h1 = document.querySelector('h1');
      const img = document.querySelector('img');
      const cs = h1 ? getComputedStyle(h1) : null;
      const imgRect = img ? img.getBoundingClientRect() : null;
      return {
        title: document.title,
        h1Text: h1 ? h1.textContent : null,
        h1Font: cs ? cs.fontFamily : null,
        h1Color: cs ? cs.color : null,
        h1FontSize: cs ? cs.fontSize : null,
        imgSrc: img ? img.src : null,
        imgComplete: img ? img.complete : null,
        imgWidth: imgRect ? imgRect.width : null,
        imgHeight: imgRect ? imgRect.height : null,
        bodyBg: getComputedStyle(document.body).backgroundColor,
        bodyColor: getComputedStyle(document.body).color,
        cssVars: { ivory: getComputedStyle(document.documentElement).getPropertyValue('--ivory'), wine: getComputedStyle(document.documentElement).getPropertyValue('--wine'), gold: getComputedStyle(document.documentElement).getPropertyValue('--gold') },
      };
    });
    console.log('PROBE', JSON.stringify(probe, null, 2));
    await pg.screenshot({ path: out, fullPage: true });
    await ctx.close();
  }
  await browser.close();
  console.log('done');
})();