// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
//await page.pause()
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  await page.getByRole('link', { name: 'Playwright inspector.' }).click();
  await page.getByRole('link', { name: 'Writing tests' }).click();
  await page.getByRole('link', { name: 'How to write the first test' }).click();
  await expect(page.getByRole('heading', { name: 'First testDirect link to' })).toBeVisible();

  //await page.pause()
});

 

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.pause()
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  await page.pause()
});
