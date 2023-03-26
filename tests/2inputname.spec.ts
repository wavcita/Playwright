import { test, expect } from '@playwright/test';

test('test2', async ({ page }) => {
const PAGE_URL = 'https://devexpress.github.io/testcafe/example/';
const name = 'Carly'
    await page.goto(PAGE_URL);
    await page.locator("//input[@id='developer-name']").click();
    await page.locator("//input[@id='developer-name']").fill(name);
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator("//input[@id='populate']").click();
});