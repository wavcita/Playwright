import { test, expect } from '@playwright/test';

test('test4', async ({ page }) => {
    const PAGE_URL = 'https://devexpress.github.io/testcafe/example/';
    await page.goto(PAGE_URL);
    const sow = 'windows';
    const som = 'macos';
    const sol = 'linux';
    const eleccion = sol;
    await page.locator(`//input[@id='${eleccion}']`).check();
});