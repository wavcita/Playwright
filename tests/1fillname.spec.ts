import { test, expect } from '@playwright/test';

test('test1', async ({ page }) => {
const PAGE_URL = 'https://devexpress.github.io/testcafe/example/';
const name = 'Carly'
  await page.goto(PAGE_URL);
  await page.locator("//input[@id='developer-name']").click();
  await page.locator("//input[@id='developer-name']").fill(name);
});