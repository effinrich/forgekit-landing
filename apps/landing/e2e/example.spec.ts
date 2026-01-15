import { test, expect } from '@playwright/test'

test.describe('Landing Page', () => {
  test('should display the hero section', async ({ page }) => {
    await page.goto('/')

    // Check for main heading
    const heading = page.locator('h1')
    await expect(heading).toContainText('From Figma to')
  })

  test('should have CTA buttons', async ({ page }) => {
    await page.goto('/')

    // Check for primary CTA
    const primaryCTA = page.getByRole('button', { name: /Start Free Trial/i })
    await expect(primaryCTA).toBeVisible()

    // Check for secondary CTA
    const secondaryCTA = page.getByRole('button', { name: /Watch Demo/i })
    await expect(secondaryCTA).toBeVisible()
  })

  test('should display features section', async ({ page }) => {
    await page.goto('/')

    // Check for features heading
    await expect(page.getByText(/Everything you need/i)).toBeVisible()
  })

  test('should display pricing section', async ({ page }) => {
    await page.goto('/')

    // Check for pricing heading
    await expect(page.getByText(/Simple pricing/i)).toBeVisible()
  })
})
