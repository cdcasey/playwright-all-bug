import { test, expect } from '@playwright/test';

test('cards', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const appCardLocators = page.getByRole('link').filter({ hasText: /card/i })
  await appCardLocators.first().waitFor();

  let appCards = await appCardLocators.all()
  expect(appCards.length).toBe(3)

  await page.getByRole('button', { name: /click me/i }).click()

  appCards = await appCardLocators.all()
  expect(appCards.length).toBeGreaterThan(3)

  await page.getByRole('button', { name: /click me/i }).click()

  // uncommenting this next line makes the test pass
  // await page.waitForTimeout(500)
  appCards = await appCardLocators.all()
  expect(appCards.length).toBeLessThan(6)
})