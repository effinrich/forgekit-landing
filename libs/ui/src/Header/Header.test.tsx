import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../test-utils'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('renders the CTA button with default text', () => {
    render(<Header />)
    expect(screen.getByRole('button', { name: 'Get Started' })).toBeInTheDocument()
  })

  it('renders custom CTA text', () => {
    render(<Header ctaText="Buy Pro" />)
    expect(screen.getByRole('button', { name: 'Buy Pro' })).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header links={[{ label: 'Features', href: '#features' }]} />)
    expect(screen.getByText('Features')).toBeInTheDocument()
  })

  it('calls onCtaClick when CTA is clicked', async () => {
    const handleClick = vi.fn()
    render(<Header onCtaClick={handleClick} />)
    await userEvent.click(screen.getByRole('button', { name: 'Get Started' }))
    expect(handleClick).toHaveBeenCalledOnce()
  })

  it('renders CTA as anchor when ctaHref is provided', () => {
    render(<Header ctaHref="https://example.com" ctaText="Go" />)
    const link = screen.getByRole('link', { name: 'Go' })
    expect(link).toHaveAttribute('href', 'https://example.com')
  })
})
