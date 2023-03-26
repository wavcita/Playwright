
import { test, expect } from '@playwright/test';

test('test6', async ({ page }) => {
    //const assert = require('assert');
    const PAGE_URL = 'https://devexpress.github.io/testcafe/example/';
    const name = 'Carly'
        await page.goto(PAGE_URL);
        await page.locator("//input[@id='developer-name']").click();
        await page.locator("//input[@id='developer-name']").fill(name);
        await page.locator("//input[@id='tried-test-cafe']").check();
    const SLIDER_VALUE = 7;
    
      const sliderValue = await page.locator('#slider');
      const actualValue = await sliderValue.innerText();
      const expectedValue = `${SLIDER_VALUE}`;
    
      });
    