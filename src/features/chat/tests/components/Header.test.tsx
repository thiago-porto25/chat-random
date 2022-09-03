import { Header } from "@features/chat/components"
import { render } from "@src/test-utils"
import { screen } from "@testing-library/react"
import UserEvent from "@testing-library/user-event"

import { axe } from "jest-axe"

import { testId } from "@src/test-utils"

const mockOnLeave = jest.fn()

describe("Feature: Chat - Component: Header", () => {
  it("should render without errors", () => {
    render(<Header onLeave={mockOnLeave} />)

    const leaveButton = screen.getByTestId(testId.chatLeave)

    expect(leaveButton).toBeInTheDocument()
  })

  it("should call onLeave when the button is clicked", async () => {
    render(<Header onLeave={mockOnLeave} />)

    const leaveButton = screen.getByTestId(testId.chatLeave)

    await UserEvent.click(leaveButton)

    expect(mockOnLeave).toHaveBeenCalledTimes(1)
  })

  it("should pass an accessibility test", async () => {
    const { container } = render(<Header onLeave={mockOnLeave} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
