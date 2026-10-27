import { test, expect } from '@playwright/test';

test('add product to cart', async ({ page }) => {
  await page.goto('https://tutorialsninja.com/demo/');

  await page.getByRole('button', { name: 'Add to Cart' }).first().click();

  const successMessage = page.locator('.alert-success');

  await expect(successMessage).toBeVisible();

  console.log(await successMessage.textContent());
});