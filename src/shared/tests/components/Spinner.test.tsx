import { Spinner } from "@src/shared/components"
import { render } from "@src/test-utils"
import { screen } from "@testing-library/react"
import { axe } from "jest-axe"

import { testId } from "@src/test-utils"

describe("Shared - Component: Spinner", () => {
  it("should render without errors", () => {
    render(<Spinner />)

    const spinner = screen.getByTestId(testId.spinner)

    expect(spinner).toBeInTheDocument()
  })

  it("should pass an accessibility test", async () => {
    const { container } = render(<Spinner />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
