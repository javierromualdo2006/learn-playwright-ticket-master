import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('main')).toContainText('Noche de Jazz');
  await expect(page.getByRole('main')).toContainText('Rock en Vivo 2023');
  await expect(page.getByRole('main')).toContainText('Festival Electrónico');
  await expect(page.getByRole('main')).toContainText('Concierto Sinfónico');
  await expect(page.getByRole('main')).toContainText('Festival de Pop Latino');
  await expect(page.getByRole('main')).toContainText('Noche de Reggaetón');
  await page.getByRole('link', { name: 'Ver todos los conciertos' }).click();
  await expect(page.getByRole('main')).toContainText('Todos los conciertosRock en Vivo 202314 de diciembre de 2023Estadio Nacional, Ciudad de MéxicoEl festival de rock más grande del año con las mejores bandas nacionales e internacionales. Una experiencia musical inolvidable con más de 8 horas de música en vivo.$85.99Ver detallesNoche de Jazz19 de noviembre de 2023Teatro Metropolitan, Ciudad de MéxicoUna velada elegante con los mejores exponentes del jazz contemporáneo. Disfruta de una atmósfera íntima y sofisticada mientras escuchas a los maestros del género.$65.50Ver detallesFestival Electrónico30 de diciembre de 2023Autódromo Hermanos Rodríguez, Ciudad de MéxicoDespide el año con la mejor música electrónica. DJs internacionales, efectos visuales impresionantes y la mejor producción para una fiesta inolvidable.$120.00Ver detallesConcierto Sinfónico9 de noviembre de 2023Palacio de Bellas Artes, Ciudad de MéxicoLa orquesta sinfónica nacional presenta las obras maestras de Beethoven y Mozart. Una experiencia cultural que no te puedes perder en el recinto más emblemático del país.$75.00Ver detallesFestival de Pop Latino4 de diciembre de 2023Foro Sol, Ciudad de MéxicoLos artistas más populares del momento reunidos en un solo escenario. Más de 6 horas de música pop latina con tus canciones favoritas.$95.50Ver detallesNoche de Reggaetón24 de noviembre de 2023Arena Ciudad de México, Ciudad de MéxicoLos mejores exponentes del reggaetón y el trap latino en un concierto explosivo. Prepárate para bailar toda la noche con los éxitos del momento.$110.00Ver detalles');
});
