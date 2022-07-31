import { render } from "@src/test-utils"
import { Card } from "@src/features/landing/components"
import { screen } from "@testing-library/react"
import { axe } from "jest-axe"

describe("Feature: Landing - Component: Card", () => {
  it("should render without throwing errors", () => {
    // render(<Card />)
    // const loginButton = screen.getByText("Login")
    // const registerButton = screen.getByText("Sign Up")
    // const heading = screen.getByRole("heading")
    // const subheading = screen.getByText(
    //   /Find someone to chat around the world right now, anonymously and securely./i
    // )
    // expect(loginButton).toBeInTheDocument()
    // expect(registerButton).toBeInTheDocument()
    // expect(heading).toBeInTheDocument()
    // expect(subheading).toBeInTheDocument()
  })

  it("should not have basic accessibility issues", async () => {
    // const { container } = render(<Card />)
    // const results = await axe(container)
    // expect(results).toHaveNoViolations()
  })
})
