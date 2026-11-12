import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readFile } from 'node:fs/promises';

test('all pages omit GitHub links and the unapproved footer slogan', async ({ page }) => {
  for (const prefix of ['', 'en/', 'zh/']) {
    for (const path of ['', 'privacy/', 'contact/']) {
      await page.goto(`${prefix}${path}` || './');
      await expect(page.locator('a[href*="github.com"]')).toHaveCount(0);
      await expect(page.locator('footer')).not.toContainText('A LITTLE MORE HUMAN.');
      await expect(page.locator('main')).not.toContainText('GitHub Issues');
    }
  }
});

for (const prefix of ['', 'en/', 'zh/']) {
  test(`privacy policy is published in the operator voice: ${prefix || 'ja/'}`, async ({ page }) => {
    await page.goto(`${prefix}privacy/`);
    const policy = page.locator('.policy-body');
    await expect(page.locator('.policy-links a')).toHaveCount(1);
    await expect(page.locator('.policy-links a')).toHaveAttribute('href', 'https://www.apple.com/legal/privacy/');
    await expect(page.locator('a[href*="policies.google.com"]')).toHaveCount(0);
    await expect(policy).not.toContainText(/確認した|現時点|開発段階|設計・開発|実装|reviewed|implementation|in design|in development|目前確認|開發階段|設計與開發|實作/i);
    await expect(policy).toContainText('WEIHISANG LIN');
    await expect(policy).toContainText('CloudKit');
    await expect(policy).toContainText('Google');
    await page.locator('footer a[data-page="contact"]').click();
    await expect(page.locator('a[href*="docs.google.com/forms/"]')).toBeVisible();
  });
}

for (const path of ['./', 'en/', 'zh/']) {
  test(`original brand and no invented app previews: ${path}`, async ({ page, request }) => {
    await page.goto(path);
    const logo = page.locator('.site-header .wordmark img');
    await expect(logo).toHaveAttribute('src', '/ReLog-page/icon_nobg.png');
    await expect(page.locator('.site-footer .wordmark img')).toHaveAttribute('src', '/ReLog-page/icon_nobg.png');
    await expect(page.locator('link[rel="icon"]')).toHaveAttribute('href', '/ReLog-page/icon_nobg.png');
    const response = await request.get((await logo.getAttribute('src'))!);
    expect(await response.body()).toEqual(await readFile(new URL('../public/icon_nobg.png', import.meta.url)));
    await expect(page.locator('.button.primary').first()).toHaveCSS('background-color', 'rgb(255, 117, 178)');
    await expect(page.locator('.connection-map, .timeline-preview, .profile-preview, .phases-preview, .memory-card')).toHaveCount(0);
    await expect(page.locator('.brand-panel img')).toHaveAttribute('src', '/ReLog-page/icon_nobg.png');
    await expect(page.locator('.feature-card')).toHaveCount(4);
  });
}

test('relationships, accessible disclosure, and real release status', async ({ page }, testInfo) => {
  await page.goto('./');
  await page.screenshot({ path: testInfo.outputPath('home.png'), fullPage: true });
  await expect(page).toHaveTitle(/ReLog/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('人との記憶');
  await expect(page.getByRole('main')).toContainText('友達');
  await expect(page.getByRole('main')).toContainText('家族');
  await expect(page.getByRole('main')).toContainText('同僚');
  await expect(page.locator('a[href*="id1234567890"]')).toHaveCount(0);
  await page.getByText('恋人以外の関係も記録できますか？', { exact: true }).click();
  await expect(page.locator('details[open]')).toContainText('自分で追加');
  await page.getByRole('link', { name: '公開状況を見る', exact: true }).first().click();
  await expect(page.locator('#availability')).toBeInViewport();
});

for (const [locale, title, lang] of [
  ['', '人との記憶', 'ja'],
  ['en/', 'people', 'en'],
  ['zh/', '與人相處', 'zh-Hant'],
] as const) {
  test(`static localized pages work without JavaScript: ${lang}`, async ({ browser, baseURL }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto(`${baseURL}${locale}`);
    await expect(page.locator('html')).toHaveAttribute('lang', lang);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(title);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://twsho.github.io/ReLog-page/${locale}`);
    await page.locator('footer a[data-page="privacy"]').click();
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.locator('main')).toContainText('iCloud');
    await page.locator('footer a[data-page="contact"]').click();
    await expect(page.locator('a[href*="docs.google.com/forms/"]')).toBeVisible();
    await expect(page.locator('form')).toHaveCount(0);
    await context.close();
  });
}

test('language links preserve the current page', async ({ page }) => {
  await page.goto('privacy/');
  await page.getByRole('link', { name: 'English', exact: true }).click();
  await expect(page).toHaveURL(/\/en\/privacy\/$/);
  await page.getByRole('link', { name: '繁體中文', exact: true }).click();
  await expect(page).toHaveURL(/\/zh\/privacy\/$/);
});

test('old in-app privacy URL still opens the policy', async ({ page }) => {
  await page.goto('./#/privacy');
  await expect(page).toHaveURL(/\/ReLog-page\/privacy\/$/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('プライバシー');
});

test('unknown paths show the branded 404 page', async ({ page }) => {
  await page.goto('404.html');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('見つかりません');
  await expect(page.getByRole('link', { name: 'ホームに戻る' })).toHaveAttribute('href', '/ReLog-page/');
});

for (const path of ['', 'privacy/', 'contact/', 'en/', 'zh/']) {
  test(`WCAG AA and no horizontal overflow: ${path || 'home'}`, async ({ page }) => {
    await page.goto(path || './');
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
    expect(results.violations).toEqual([]);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
}

test('all local links and images resolve under the GitHub Pages base', async ({ page, request }) => {
  await page.goto('./');
  const paths = await page.locator('a[href^="/"], img[src^="/"]').evaluateAll((elements) =>
    [...new Set(elements.map((element) => element.getAttribute('href') || element.getAttribute('src') || ''))],
  );
  for (const path of paths) {
    expect(path).toMatch(/^\/ReLog-page\//);
    const response = await request.get(path.split('#')[0]);
    expect(response.ok(), path).toBe(true);
  }
});

test('social image, robots and sitemap are published static assets', async ({ page, request }) => {
  await page.goto('./');
  const image = await page.locator('meta[property="og:image"]').getAttribute('content');
  const response = await request.get(new URL(image!).pathname);
  expect(response.ok()).toBe(true);
  expect(response.headers()['content-type']).toContain('image/png');
  const robots = await request.get('robots.txt');
  expect(await robots.text()).toContain('https://twsho.github.io/ReLog-page/sitemap-index.xml');
  const sitemap = await request.get('sitemap-0.xml');
  expect(await sitemap.text()).toContain('https://twsho.github.io/ReLog-page/en/privacy/');
});

test('keyboard skip link reaches main content', async ({ page, browserName }) => {
  await page.goto('./');
  // Safari follows the macOS link-navigation convention (Option-Tab).
  await page.keyboard.press(browserName === 'webkit' ? 'Alt+Tab' : 'Tab');
  await expect(page.getByRole('link', { name: '本文へスキップ' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#main$/);
  await expect(page.locator('main')).toBeFocused();
});