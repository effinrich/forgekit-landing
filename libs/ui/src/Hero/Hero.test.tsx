import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../test-utils'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

const requiredProps = {
  headline: 'Build faster with ForgeKit',
  highlightedText: 'ForgeKit',
  description: 'Automate Storybook.',
  primaryCta: 'Get Started',
}

describe('Hero', () => {
  it('renders headline with highlighted text', () => {
    render(<Hero {...requiredProps} />)
    expect(screen.getByText('ForgeKit')).toBeInTheDocument()
    expect(screen.getByText('Build faster with')).toBeInTheDocument()
  })

  it('renders description', () => {
    render(<Hero {...requiredProps} />)
    expect(screen.getByText('Automate Storybook.')).toBeInTheDocument()
  })

  it('renders primary CTA button', () => {
    render(<Hero {...requiredProps} />)
    expect(screen.getByRole('button', { name: 'Get Started' })).toBeInTheDocument()
  })

  it('calls onPrimaryClick', async () => {
    const handleClick = vi.fn()
    render(<Hero {...requiredProps} onPrimaryClick={handleClick} />)
    await userEvent.click(screen.getByRole('button', { name: 'Get Started' }))
    expect(handleClick).toHaveBeenCalledOnce()
  })

  it('renders badge when provided', () => {
    render(<Hero {...requiredProps} badge="New" />)
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('renders secondary CTA when provided', () => {
    render(<Hero {...requiredProps} secondaryCta="Watch Demo" />)
    expect(screen.getByRole('button', { name: 'Watch Demo' })).toBeInTheDocument()
  })

  it('does not render secondary CTA when omitted', () => {
    render(<Hero {...requiredProps} />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(1)
  })
})
