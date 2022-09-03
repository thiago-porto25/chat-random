import { Timestamp } from "firebase/firestore"
import { Body } from "@features/chat/components"
import { render } from "@src/test-utils"
import { screen } from "@testing-library/react"
import { axe } from "jest-axe"

import { testId } from "@src/test-utils"

const mockMessages = [
  {
    authorId: "me",
    content: "Hello World",
    timestamp: Timestamp.now(),
  },
]

describe("Feature: Chat - Component: Body", () => {
  it("should render without errors", () => {
    render(<Body messages={mockMessages} />)

    const messageContainer = screen.getByTestId(testId.messagesContainer)

    expect(messageContainer).toBeInTheDocument()
  })

  it("should pass an accessibility test", async () => {
    const { container } = render(<Body messages={mockMessages} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
