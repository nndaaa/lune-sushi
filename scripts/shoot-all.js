const { chromium } = require('playwright');
const BASE = process.env.BASE || 'http://localhost:3000';

const TARGETS = [
  { url: '/', name: 'home' },
  { url: '/carte/', name: 'carte' },
  { url: '/carte/sushi-saumon/', name: 'dish-saumon' },
  { url: '/carte/plateau-lune/', name: 'dish-plateau' },
  { url: '/plateaux/', name: 'plateaux' },
  { url: '/maison/', name: 'maison' },
  { url: '/infos/', name: 'infos' },
  { url: '/commander/', name: 'commander' },
];

(async () => {
  const browser = await chromium.launch();
  const summary = [];
  for (const t of TARGETS) {
    for (const [w,h,size] of [[1440,900,'d'],[390,844,'m']]) {
      const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
      const pg = await ctx.newPage();
      const failures = [];
      pg.on('requestfailed', r => failures.push(r.url() + ' ' + r.failure().errorText));
      pg.on('response', r => { if (r.status() >= 400) failures.push(r.status() + ' ' + r.url()); });
      await pg.goto(BASE + t.url, { waitUntil: 'networkidle' });
      await pg.waitForTimeout(700);
      const probe = await pg.evaluate(() => {
        const h1 = document.querySelector('h1');
        const btn = document.querySelector('a.btn-wine, button.btn-wine');
        return {
          title: document.title,
          h1: h1 ? h1.textContent.trim() : null,
          bodyBg: getComputedStyle(document.body).backgroundColor,
          firstBtnText: btn ? btn.textContent.trim().slice(0, 60) : null,
        };
      });
      await pg.screenshot({ path: `/tmp/shot_${size}_${t.name}.png`, fullPage: true });
      summary.push({ url: t.url, viewport: size, probe, failures });
      await ctx.close();
    }
  }
  await browser.close();
  console.log(JSON.stringify(summary, null, 2));
})();