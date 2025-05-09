import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: /^\$65\.50Ver detalles$/ }).getByRole('link').click();
  await page.getByRole('button', { name: 'Comprar entradas' }).click();
  await page.getByRole('textbox', { name: 'Nombre del titular' }).click();
  await page.getByRole('textbox', { name: 'Nombre del titular' }).fill('test3');
  await page.getByRole('textbox', { name: 'Número de tarjeta' }).click();
  await page.getByRole('textbox', { name: 'Número de tarjeta' }).fill('1234567890123456');
  await page.getByRole('combobox', { name: 'Mes' }).click();
  await page.getByRole('option', { name: '03' }).click();
  await page.getByRole('combobox', { name: 'Año' }).click();
  await page.getByRole('option', { name: '2026' }).click();
  await page.getByRole('textbox', { name: 'CVC' }).click();
  await page.getByRole('textbox', { name: 'CVC' }).fill('1234');
  await page.getByRole('textbox', { name: 'Email para recibir las' }).click();
  await page.getByRole('textbox', { name: 'Email para recibir las' }).fill('mi@gmail.com');
  await expect(page.locator('form')).toContainText('Nombre del titular');
  await expect(page.getByRole('textbox', { name: 'Nombre del titular' })).toHaveValue('test3');
  await expect(page.getByRole('textbox', { name: 'Número de tarjeta' })).toHaveValue('1234567890123456');
  await expect(page.getByRole('textbox', { name: 'CVC' })).toHaveValue('1234');
  await expect(page.getByRole('textbox', { name: 'Email para recibir las' })).toHaveValue('mi@gmail.com');
  await page.locator('html').click();
  await page.getByRole('button', { name: 'Completar compra' }).click();
  await expect(page.getByRole('main')).toContainText('¡Compra exitosa!Tu compra ha sido procesada correctamente. Hemos enviado las entradas a tu correo electrónico.');
  await expect(page.getByRole('main')).toContainText('¡Compra exitosa!Tu compra ha sido procesada correctamente. Hemos enviado las entradas a tu correo electrónico.Detalles de la compraCódigo de confirmación: MMHTQLHYNoche de Jazz19 de noviembre de 2023 - 19:30Teatro Metropolitan, Ciudad de MéxicoPrecio por entrada:$65.50Cantidad:1Total pagado:$65.50Descargar entradasReenviar al correoVolver al inicio');
  await expect(page.getByRole('main')).toContainText('Código de confirmación: MMHTQLHY');
});