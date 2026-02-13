import { test, expect } from '@playwright/test'

test.describe('CTA', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to Storybook story
    await page.goto('/iframe.html?id=components-cta--default')
  })

  test('renders correctly', async ({ page }) => {
    const component = page.locator('[data-testid="cta"]').first()
    await expect(component).toBeVisible()
  })

  test('handles interactions', async ({ page }) => {
    const component = page.locator('[data-testid="cta"]').first()
    
    // Click interaction
    await component.click()
    
    // Add assertions for expected behavior
  })

  test('is keyboard accessible', async ({ page }) => {
    // Tab to component
    await page.keyboard.press('Tab')
    
    const component = page.locator('[data-testid="cta"]').first()
    await expect(component).toBeFocused()
    
    // Test Enter key
    await page.keyboard.press('Enter')
    
    // Test Space key
    await page.keyboard.press(' ')
  })

  test('meets accessibility standards', async ({ page }) => {
    // Install @axe-core/playwright for this test
    // const { injectAxe, checkA11y } = require('@axe-core/playwright')
    // await injectAxe(page)
    // await checkA11y(page)
  })

  test('responsive - mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    
    const component = page.locator('[data-testid="cta"]').first()
    await expect(component).toBeVisible()
  })

  test('responsive - desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 })
    
    const component = page.locator('[data-testid="cta"]').first()
    await expect(component).toBeVisible()
  })
})
