import { test, expect } from '@playwright/test';

test('Verify login feature', async ({ page }) => {
//await page.pause()
  await page.goto("https://the-internet.herokuapp.com/login")
  await page.locator("id=username").click()
  await page.locator("//input[@id='username']").fill("tomsmith")

  await page.locator("id=password").click()
  await page.locator("//input[@id='password']").fill("SuperSecretPassword!")

  await page.getByRole('button', { type: 'submit' }).click();
//OR - await page.getByRole('button', { class: 'radius' }).click(); 

  await expect(page.getByText("Welcome to the Secure Area. When you are done click logout below.")).toBeVisible();
  await expect(page.locator("//a[contains(@href, '/logout')]")).toBeVisible();
  
  await page.locator("//a[contains(@href, '/logout')]").click()
  
  //await page.pause()
  });

 