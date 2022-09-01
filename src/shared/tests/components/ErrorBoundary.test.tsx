import { render } from "@src/test-utils"
import { ErrorBoundary } from "@src/shared/components"
import { screen } from "@testing-library/react"
import { axe } from "jest-axe"

describe("Shared - Component: ErrorBoundary", () => {
  const Child = () => {
    throw new Error()
  }

  it("should render without throwing errors", () => {
    render(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    )

    const text = screen.getByText(/Something went wrong./i)

    expect(text).toBeInTheDocument()
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    )
    const text = screen.getByText(/Something went wrong./i)

    expect(text).toBeInTheDocument()

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
