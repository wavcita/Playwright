import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/textinput');
  //make sure input is visible por id #, lo q esta dentro de expect es un locator
await expect(page.locator('#newButtonName')).toBeVisible();
  //select input and fill the input your text

  //click in button

  //verify button text updated

});