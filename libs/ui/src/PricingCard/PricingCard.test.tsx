import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../test-utils'
import userEvent from '@testing-library/user-event'
import { PricingCard } from './PricingCard'

const requiredProps = {
  name: 'Pro',
  description: 'For teams.',
  price: '$49',
  features: ['Unlimited components', 'Tests & docs'],
}

describe('PricingCard', () => {
  it('renders name, description, and price', () => {
    render(<PricingCard {...requiredProps} />)
    expect(screen.getByText('Pro')).toBeInTheDocument()
    expect(screen.getByText('For teams.')).toBeInTheDocument()
    expect(screen.getByText('$49')).toBeInTheDocument()
  })

  it('renders all features', () => {
    render(<PricingCard {...requiredProps} />)
    expect(screen.getByText('Unlimited components')).toBeInTheDocument()
    expect(screen.getByText('Tests & docs')).toBeInTheDocument()
  })

  it('renders default CTA text', () => {
    render(<PricingCard {...requiredProps} />)
    expect(screen.getByRole('button', { name: 'Get Started' })).toBeInTheDocument()
  })

  it('renders custom CTA text', () => {
    render(<PricingCard {...requiredProps} ctaText="Buy Now" />)
    expect(screen.getByRole('button', { name: 'Buy Now' })).toBeInTheDocument()
  })

  it('calls onCtaClick', async () => {
    const handleClick = vi.fn()
    render(<PricingCard {...requiredProps} onCtaClick={handleClick} />)
    await userEvent.click(screen.getByRole('button', { name: 'Get Started' }))
    expect(handleClick).toHaveBeenCalledOnce()
  })

  it('renders "Most Popular" badge when isPopular is true', () => {
    render(<PricingCard {...requiredProps} isPopular />)
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
  })

  it('does not render "Most Popular" badge when isPopular is false', () => {
    render(<PricingCard {...requiredProps} isPopular={false} />)
    expect(screen.queryByText('Most Popular')).not.toBeInTheDocument()
  })

  it('renders period text', () => {
    render(<PricingCard {...requiredProps} period="/month" />)
    expect(screen.getByText('/month')).toBeInTheDocument()
  })
})
