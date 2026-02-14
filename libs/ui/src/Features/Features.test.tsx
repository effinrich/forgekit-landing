import { describe, it, expect } from 'vitest'
import { render, screen } from '../test-utils'
import { Features } from './Features'

const sampleFeatures = [
  { icon: <span>★</span>, title: 'Stories', description: 'Auto-generated.' },
  { icon: <span>★</span>, title: 'Tests', description: 'Component tests.' },
]

describe('Features', () => {
  it('renders headline and feature cards', () => {
    render(<Features headline="Everything you need" features={sampleFeatures} />)
    expect(screen.getByText('Everything you need')).toBeInTheDocument()
    expect(screen.getByText('Stories')).toBeInTheDocument()
    expect(screen.getByText('Tests')).toBeInTheDocument()
  })

  it('renders badge when provided', () => {
    render(<Features badge="Features" headline="Title" features={sampleFeatures} />)
    expect(screen.getByText('Features')).toBeInTheDocument()
  })

  it('renders description when provided', () => {
    render(
      <Features headline="Title" description="A description." features={sampleFeatures} />
    )
    expect(screen.getByText('A description.')).toBeInTheDocument()
  })

  it('renders highlighted text in headline', () => {
    render(
      <Features headline="Everything you need" highlightedText="you need" features={sampleFeatures} />
    )
    expect(screen.getByText('you need')).toBeInTheDocument()
  })
})
