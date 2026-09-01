const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const pg = await ctx.newPage();
  const results = [];
  pg.on('pageerror', e => results.push('PAGE_ERROR: ' + e.message));
  pg.on('response', r => { if (r.status() >= 400 && !r.url().includes('favicon')) results.push('HTTP_' + r.status() + ' ' + r.url()); });

  // 1) Home -> Découvrir la carte
  await pg.goto('https://nndaaa.github.io/lune-sushi/', { waitUntil: 'networkidle' });
  results.push('home title: ' + await pg.title());
  await pg.click('a:has-text("Découvrir la carte")');
  await pg.waitForLoadState('networkidle');
  results.push('after click -> ' + pg.url());
  results.push('carte h1: ' + (await pg.locator('h1').first().textContent()));

  // 2) La carte -> Choisir Sushi saumon (use first visible, desktop is the visible one at 1440)
  await pg.locator('a:has-text("Choisir")').first().click();
  await pg.waitForLoadState('networkidle');
  results.push('after choisir -> ' + pg.url());
  results.push('detail h1: ' + (await pg.locator('h1').first().textContent()));

  // 3) Quantity stepper
  const incBtn = pg.locator('button[aria-label="Augmenter la quantité"]').first();
  await incBtn.click();
  await incBtn.click();
  const qtyText = await pg.evaluate(() => {
    const btn = document.querySelector('button[aria-label="Augmenter la quantité"]');
    return btn?.parentElement?.querySelector('span')?.textContent || '?';
  });
  results.push('qty: ' + qtyText);
  results.push('CTA: ' + (await pg.locator('button.btn-wine').first().textContent()));

  // 4) Ajouter au panier
  await pg.locator('button.btn-wine:has-text("Ajouter")').first().click();
  results.push('CTA after click: ' + (await pg.locator('button.btn-wine').first().textContent()));

  // 5) Breadcrumb back to carte
  await pg.click('a:has-text("La carte")');
  await pg.waitForLoadState('networkidle');
  results.push('after breadcrumb -> ' + pg.url());

  // 6) Filter pills
  await pg.click('button:has-text("Sushi")');
  results.push('after Sushi filter: cards = ' + (await pg.locator('article').count()));
  await pg.click('button:has-text("Tout")');

  // 7) Header nav
  await pg.click('header a:has-text("Nos plateaux")');
  await pg.waitForLoadState('networkidle');
  results.push('plateaux -> ' + pg.url() + ' h1=' + (await pg.locator('h1').first().textContent()));

  await pg.click('header a:has-text("La maison")');
  await pg.waitForLoadState('networkidle');
  results.push('maison -> ' + pg.url() + ' h1=' + (await pg.locator('h1').first().textContent()));

  await pg.click('header a:has-text("Infos pratiques")');
  await pg.waitForLoadState('networkidle');
  results.push('infos -> ' + pg.url() + ' h1=' + (await pg.locator('h1').first().textContent()));

  await pg.click('header a:has-text("Commander")');
  await pg.waitForLoadState('networkidle');
  results.push('commander -> ' + pg.url() + ' h1=' + (await pg.locator('h1').first().textContent()));

  await pg.click('header a:has-text("La carte")');
  await pg.waitForLoadState('networkidle');
  results.push('back to carte -> ' + pg.url());

  console.log(JSON.stringify(results, null, 2));
  await browser.close();
})();