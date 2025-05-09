import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: /^\$85\.99Ver detalles$/ }).getByRole('link').click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('5005');
  await expect(page.getByRole('spinbutton')).toHaveValue('500');
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('5005');
  await expect(page.getByRole('status')).toMatchAriaSnapshot(`
    - status:
      - text: /No hay suficientes entradas disponibles Solo quedan \\d+ entradas para este concierto\\./
      - button:
        - img
    `);
  await page.getByRole('status').click();
  await expect(page.getByRole('status')).toMatchAriaSnapshot(`- text: No hay suficientes entradas disponibles`);
  await page.getByRole('region', { name: 'Notifications (F8)' }).getByRole('button').click();
});