import { describe, it, expect } from 'vitest'
import { render, screen } from '../test-utils'
import { FeatureCard } from './FeatureCard'

const requiredProps = {
  icon: <span data-testid="icon">★</span>,
  title: 'Auto Stories',
  description: 'Generate stories automatically.',
}

describe('FeatureCard', () => {
  it('renders title and description', () => {
    render(<FeatureCard {...requiredProps} />)
    expect(screen.getByText('Auto Stories')).toBeInTheDocument()
    expect(screen.getByText('Generate stories automatically.')).toBeInTheDocument()
  })

  it('renders the icon', () => {
    render(<FeatureCard {...requiredProps} />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('accepts a custom accentColor', () => {
    const { container } = render(<FeatureCard {...requiredProps} accentColor="#F97316" />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
