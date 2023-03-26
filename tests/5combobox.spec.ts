import { test, expect } from '@playwright/test';

test('test5', async ({ page }) => {
    const PAGE_URL = 'https://devexpress.github.io/testcafe/example/';
    await page.goto(PAGE_URL);
    const cb1="Command Line";
    const cb2="JavaScript API";
    const cb3="Both";
    const eleccion = cb2;
    await page.locator("//select[@id='preferred-interface']").selectOption(eleccion);
});