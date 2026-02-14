import { describe, it, expect } from 'vitest'
import { render, screen } from '../test-utils'
import userEvent from '@testing-library/user-event'
import { Pricing } from './Pricing'

const plans = [
  {
    name: 'Free',
    description: 'For individuals.',
    monthlyPrice: '$0',
    annualPrice: '$0',
    features: ['5 components'],
    ctaText: 'Get Started',
  },
  {
    name: 'Pro',
    description: 'For teams.',
    monthlyPrice: '$49',
    annualPrice: '$39',
    features: ['Unlimited'],
    ctaText: 'Buy Pro',
    isPopular: true,
  },
]

describe('Pricing', () => {
  it('renders headline and plan names', () => {
    render(<Pricing headline="Our Pricing" plans={plans} />)
    expect(screen.getByText('Our Pricing')).toBeInTheDocument()
    expect(screen.getByText('Free')).toBeInTheDocument()
    expect(screen.getByText('Pro')).toBeInTheDocument()
  })

  it('renders badge when provided', () => {
    render(<Pricing badge="Pricing" headline="Title" plans={plans} />)
    expect(screen.getByText('Pricing')).toBeInTheDocument()
  })

  it('renders description when provided', () => {
    render(<Pricing headline="Title" description="Pick a plan." plans={plans} />)
    expect(screen.getByText('Pick a plan.')).toBeInTheDocument()
  })

  it('defaults to annual pricing (shows annualPrice)', () => {
    render(<Pricing headline="Title" plans={plans} />)
    expect(screen.getByText('$39')).toBeInTheDocument()
  })

  it('toggles to monthly pricing', async () => {
    render(<Pricing headline="Title" plans={plans} />)
    const toggle = screen.getByRole('checkbox')
    await userEvent.click(toggle)
    expect(screen.getByText('$49')).toBeInTheDocument()
  })
})
