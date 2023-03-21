import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');
  await page.getByTestId('name-input').click();
  await page.getByTestId('name-input').fill('Carly');
  await page.getByTestId('reusing-js-code-checkbox').check();
  await page.getByTestId('ci-checkbox').check();
  await page.getByTestId('linux-radio').check();
  await page.getByTestId('preferred-interface-select').selectOption('JavaScript API');
  await page.getByTestId('tried-testcafe-checkbox').check();
  await page.locator('#slider').click();
  await page.getByTestId('comments-area').click();
  await page.getByTestId('comments-area').fill('pruebas');
  //await page.getByRole('button', {name: 'submit-button'}).click();
  //await expect(page).toHaveURL('https://devexpress.github.io/testcafe/example/thank-you.html');
  //await page.getByTestId('submit-button').click();
  
});