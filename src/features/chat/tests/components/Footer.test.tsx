import { Footer } from "@features/chat/components"
import { render } from "@src/test-utils"
import { screen } from "@testing-library/react"
import UserEvent from "@testing-library/user-event"
import { axe } from "jest-axe"

import { testId } from "@src/test-utils"

const mockContent = "Hello world!"
const mockOnSend = jest.fn()
const mockSetContent = jest.fn()

describe("Feature: Chat - Component: Footer", () => {
  it("should render without errors", () => {
    render(
      <Footer
        content={mockContent}
        onSend={mockOnSend}
        setContent={mockSetContent}
      />
    )

    const chatInput = screen.getByTestId(testId.chat)

    expect(chatInput).toBeInTheDocument()
  })

  it("should call onSend when input is not empty", async () => {
    render(
      <Footer
        content={mockContent}
        onSend={mockOnSend}
        setContent={mockSetContent}
      />
    )

    const chatInput = screen.getByTestId(testId.chat)

    await UserEvent.type(chatInput, "Hello{enter}")

    expect(mockOnSend).toHaveBeenCalledTimes(1)
    expect(mockSetContent).toHaveBeenCalled()
  })

  it("should not call onSend when input is empty", async () => {
    render(
      <Footer content="" onSend={mockOnSend} setContent={mockSetContent} />
    )

    const sendButton = screen.getByTestId(testId.chatSubmit)

    await UserEvent.click(sendButton)

    expect(mockOnSend).not.toHaveBeenCalled()
    expect(mockSetContent).not.toHaveBeenCalled()
  })

  it("should pass an accessibility test", async () => {
    const { container } = render(
      <Footer
        content={mockContent}
        onSend={mockOnSend}
        setContent={mockSetContent}
      />
    )
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
