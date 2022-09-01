import { DefaultContent } from "@features/home/components"
import { render } from "@src/test-utils"
import { screen } from "@testing-library/react"
import { axe } from "jest-axe"

import { testId } from "@src/test-utils"

const handleClick = jest.fn()

describe("Feature: Home - Component: DefaultContent", () => {
  it("should render without errors", () => {
    render(<DefaultContent handleClick={handleClick} />)

    const button = screen.getByTestId(testId.chatNowButton)

    expect(button).toBeInTheDocument()
  })

  it("should pass an accessibility test", async () => {
    const { container } = render(<DefaultContent handleClick={handleClick} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
