import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.goto('http://localhost:4200/pages/iot-dashboard');
  await page.locator('div').nth(4).click();
  await page.getByRole('link', { name: 'Datepicker' }).click();
  await page.getByRole('link', { name: 'Forms' }).click();
  await page.getByRole('link', { name: 'Forms' }).dblclick();
  await page.getByRole('link', { name: 'Forms' }).click();
  await page.getByRole('link', { name: 'Form Layouts' }).click();
  await page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByPlaceholder('Email').click();
});