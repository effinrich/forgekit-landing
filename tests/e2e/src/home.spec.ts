import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('should display welcome message', async ({ page }) => {
    await page.goto('/')
    
    await expect(page.getByRole('heading', { name: /welcome/i })).toBeVisible()
  })

  test('should have working navigation', async ({ page }) => {
    await page.goto('/')
    
    const homeLink = page.getByRole('link', { name: /home/i })
    await expect(homeLink).toBeVisible()
  })

  test('should display button', async ({ page }) => {
    await page.goto('/')
    
    const button = page.getByRole('button', { name: /get started/i })
    await expect(button).toBeVisible()
  })
})
