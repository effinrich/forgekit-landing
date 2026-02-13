import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { FeatureCard } from "./FeatureCard"

describe("FeatureCard", () => {
  it("renders correctly", () => {
    render(
      <FeatureCard
        icon={undefined}
        title="Test Title"
        description="Test description"
      />
    )

    expect(screen.getByText("Test Title")).toBeInTheDocument()
    expect(screen.getByText("Test description")).toBeInTheDocument()
  })

  it("applies custom className", () => {
    const { container } = render(
      <FeatureCard
        className="custom-class"
        icon={undefined}
        title="Custom"
        description="A custom description"
      />
    )
    const root = container.firstChild as HTMLElement
    expect(root).toHaveClass("custom-class")
  })
})
