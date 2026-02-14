import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../test-utils'
import userEvent from '@testing-library/user-event'
import { CTA } from './CTA'

const requiredProps = {
  headline: 'Ready to go?',
  description: 'Start now.',
  primaryCta: 'Get Started',
}

describe('CTA', () => {
  it('renders headline and description', () => {
    render(<CTA {...requiredProps} />)
    expect(screen.getByText('Ready to go?')).toBeInTheDocument()
    expect(screen.getByText('Start now.')).toBeInTheDocument()
  })

  it('renders primary CTA button', () => {
    render(<CTA {...requiredProps} />)
    expect(screen.getByRole('button', { name: 'Get Started' })).toBeInTheDocument()
  })

  it('calls onPrimaryClick when primary CTA is clicked', async () => {
    const handleClick = vi.fn()
    render(<CTA {...requiredProps} onPrimaryClick={handleClick} />)
    await userEvent.click(screen.getByRole('button', { name: 'Get Started' }))
    expect(handleClick).toHaveBeenCalledOnce()
  })

  it('renders secondary CTA when provided', () => {
    render(<CTA {...requiredProps} secondaryCta="Learn More" />)
    expect(screen.getByRole('button', { name: 'Learn More' })).toBeInTheDocument()
  })

  it('does not render secondary CTA when omitted', () => {
    render(<CTA {...requiredProps} />)
    expect(screen.queryAllByRole('button')).toHaveLength(1)
  })

  it('calls onSecondaryClick when secondary CTA is clicked', async () => {
    const handleClick = vi.fn()
    render(
      <CTA {...requiredProps} secondaryCta="Learn More" onSecondaryClick={handleClick} />
    )
    await userEvent.click(screen.getByRole('button', { name: 'Learn More' }))
    expect(handleClick).toHaveBeenCalledOnce()
  })

  it('renders highlighted text within headline', () => {
    render(<CTA {...requiredProps} headline="Ready to go?" highlightedText="go" />)
    expect(screen.getByText('go')).toBeInTheDocument()
  })
})
