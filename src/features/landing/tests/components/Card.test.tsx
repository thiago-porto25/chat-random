import { render } from "@src/test-utils"
import { Card } from "@src/features/landing/components"
import { screen } from "@testing-library/react"
import { axe } from "jest-axe"

import { substituteNextImage } from "@src/test-utils"

describe("Feature: Landing - Component: Card", () => {
  beforeAll(substituteNextImage)

  it("should render without throwing errors", async () => {
    render(<Card />)

    const loginButton = await screen.findByText(/Login/i)
    const registerButton = await screen.findByText(/Sign Up/i)
    const heading = await screen.findByRole("heading")
    const subheading = await screen.findByText(
      /Find someone to chat around the world right now, anonymously and securely./i
    )
    const image = await screen.findByAltText(/two people/i)

    expect(loginButton).toBeInTheDocument()
    expect(registerButton).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(subheading).toBeInTheDocument()
    expect(image).toBeInTheDocument()
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<Card />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
