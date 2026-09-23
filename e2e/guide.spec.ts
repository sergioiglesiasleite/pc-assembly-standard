import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('all three language routes show the guide', async ({ page }) => {
  for (const lang of ['en', 'es', 'de']) {
    await page.goto(`/${lang}/`);
    await expect(page.locator('html')).toHaveAttribute('lang', lang);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.locator('main section#prep')).toBeVisible();
  }
});

test('mobile menu opens, follows an anchor and closes', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/en/');
  const menu = page.locator('[data-mobile-navigation]');
  await expect(menu).not.toHaveAttribute('open');
  await menu.locator('summary').click();
  await expect(menu).toHaveAttribute('open');
  await menu.getByRole('link', { name: 'Cabling' }).click();
  await expect(page).toHaveURL(/#cabling$/);
  await expect(menu).not.toHaveAttribute('open');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
  expect(overflow).toBe(false);
});

test('main controls remain operable from the keyboard', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/en/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#content$/);

  const menu = page.locator('[data-mobile-navigation]');
  await menu.locator('summary').focus();
  await page.keyboard.press('Enter');
  await expect(menu).toHaveAttribute('open');
  await page.keyboard.press('Escape');
  await expect(menu).not.toHaveAttribute('open');

  const firstCheckbox = page.locator('#prep').getByRole('checkbox').first();
  await firstCheckbox.focus();
  await page.keyboard.press('Space');
  await expect(firstCheckbox).toBeChecked();
});

test('mobile branding and language control remain accessible at 320px', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  for (const lang of ['en', 'es', 'de']) {
    await page.goto(`/${lang}/`);
    const brand = page.locator('[data-mobile-header] > div > a');
    const title = await page.getByRole('heading', { level: 1 }).innerText();
    await expect(brand).toHaveAttribute('aria-label', title);
    expect((await brand.boundingBox())?.height ?? 0).toBeGreaterThanOrEqual(44);
    expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)).toBe(false);

    const selector = page.locator('[data-mobile-header] [data-language-selector]');
    const summary = selector.locator('summary');
    await summary.focus();
    await page.keyboard.press('Enter');
    await expect(selector).toHaveAttribute('open');
    await expect(selector.locator(`a[lang="${lang}"]`)).toHaveAttribute('aria-current', 'page');
    await page.keyboard.press('Escape');
    await expect(selector).not.toHaveAttribute('open');
    await expect(summary).toBeFocused();
  }
});

test('each language has production metadata and loads without console or asset errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('response', (response) => {
    if (response.status() >= 400 && new URL(response.url()).origin === 'http://127.0.0.1:4321') {
      errors.push(`${response.status()} ${response.url()}`);
    }
  });

  for (const lang of ['en', 'es', 'de']) {
    await page.goto(`/${lang}/`);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://pc-assembly-standard.vercel.app/${lang}/`);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', 'https://pc-assembly-standard.vercel.app/images/social-preview.webp');
    await expect(page.locator(`link[hreflang="${lang}"]`)).toHaveAttribute('href', `https://pc-assembly-standard.vercel.app/${lang}/`);
  }
  expect(errors).toEqual([]);
});

test('checklist progress survives reload and language switch, then resets', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/en/');
  const prep = page.locator('#prep');
  const first = prep.getByRole('checkbox').first();
  await first.check();
  await expect(prep.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '1');
  await page.reload();
  await expect(prep.getByRole('checkbox').first()).toBeChecked();

  await page.locator('[data-mobile-header] [data-language-selector] summary').click();
  await page.locator('[data-mobile-header] [data-language-selector]').getByRole('link', { name: /Español/ }).click();
  await expect(page).toHaveURL(/\/es\/?$/);
  await expect(page.locator('#prep').getByRole('checkbox').first()).toBeChecked();

  page.once('dialog', (dialog) => dialog.accept());
  await page.locator('#prep').getByRole('button', { name: 'Reiniciar progreso' }).click();
  await expect(page.locator('#prep').getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
});

test('no serious or critical accessibility violations in the three languages', async ({ page }) => {
  for (const lang of ['en', 'es', 'de']) {
    await page.goto(`/${lang}/`);
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
    const significant = results.violations.filter((violation) => ['serious', 'critical'].includes(violation.impact ?? ''));
    expect(significant, `Accessibility violations on /${lang}/`).toEqual([]);
  }
});
