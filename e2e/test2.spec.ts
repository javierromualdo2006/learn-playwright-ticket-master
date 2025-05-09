import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: /^\$85\.99Ver detalles$/ }).getByRole('link').click();
  await expect(page.getByRole('main')).toContainText('Disponibles: 500 entradas');
  await page.getByRole('button').nth(1).click();
  await page.getByRole('button').first().click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('1333');
  await page.goto('http://localhost:3000/concerts/1');
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('1333');
  await expect(page.getByRole('spinbutton')).toHaveValue('500');
  await page.getByRole('button').first().click();
  await page.getByRole('button').nth(1).click();
  await page.locator('div').filter({ hasText: /^\$65\.50Ver detalles$/ }).getByRole('link').click();
  await page.getByRole('button').nth(1).click();
  await page.locator('div').filter({ hasText: /^Total:\$131\.00Comprar entradas$/ }).locator('div').first().click();
  await page.getByRole('button').first().click();
  await page.goto('http://localhost:3000/concerts/2');
  await expect(page.getByRole('main')).toContainText('Disponibles: 200 entradas');
});