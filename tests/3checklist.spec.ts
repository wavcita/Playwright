import { test, expect } from '@playwright/test';

test('test3', async ({ page }) => {
    const PAGE_URL = 'https://devexpress.github.io/testcafe/example/';
    await page.goto(PAGE_URL);

    const cl1='remote-testing';
    const cl2='reusing-js-code';
    const cl3='background-parallel-testing';
    const cl4='continuous-integration-embedding';
    const cl5='traffic-markup-analysis';
    const checklist=[cl1, cl2, cl3];
    for(let n of checklist){
        await page.locator(`//input[@id='${n}']`).check();
    }
});