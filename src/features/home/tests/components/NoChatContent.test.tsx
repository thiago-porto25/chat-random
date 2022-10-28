import { NoChatContent } from "@features/home/components"
import { render } from "@src/test-utils"
import { screen } from "@testing-library/react"
import { axe } from "jest-axe"

import { testId } from "@src/test-utils"

const handleClick = jest.fn()

describe("Feature: Home - Component: NoChatContent", () => {
  it("should render without errors", () => {
    render(<NoChatContent handleClick={handleClick} />)

    const title = screen.getByTestId(testId.noChatTitle)
    const button = screen.getByTestId(testId.tryButton)

    expect(title).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it("should pass an accessibility test", async () => {
    const { container } = render(<NoChatContent handleClick={handleClick} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
