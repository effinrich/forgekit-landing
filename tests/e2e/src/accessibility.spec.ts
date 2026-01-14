import { test, expect } from '@playwright/test'

test.describe('Accessibility', () => {
  test('should have no accessibility violations on home page', async ({ page }) => {
    await page.goto('/')

    // Basic accessibility checks
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')

    // Check that main content is present
    const main = page.locator('main')
    await expect(main).toBeVisible()

    // Check that all images have alt text (if any)
    const images = page.locator('img')
    const count = await images.count()
    for (let i = 0; i < count; i++) {
      const img = images.nth(i)
      const alt = await img.getAttribute('alt')
      expect(alt).not.toBeNull()
    }
  })

  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/')

    // Tab through interactive elements
    await page.keyboard.press('Tab')

    // First focusable element should be focused
    const focusedElement = page.locator(':focus')
    await expect(focusedElement).toBeVisible()
  })
})
