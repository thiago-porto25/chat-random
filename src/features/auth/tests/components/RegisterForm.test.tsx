// TODO create tests
import { RegisterForm } from "@features/auth/components"
import { render } from "@src/test-utils"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "jest-axe"

import { mockInfo, testId } from "@src/test-utils"

const mockOnSubmit = jest.fn()

describe("Feature: Auth - Component: RegisterForm", () => {
  it("should render without errors", () => {
    render(<RegisterForm onSubmit={mockOnSubmit} />)

    const form = screen.getByTestId(testId.registerForm)

    expect(form).toBeInTheDocument()
  })

  it("should pass an accessibility test", async () => {
    const { container } = render(<RegisterForm onSubmit={mockOnSubmit} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  it("submit button becomes disabled at the start", () => {
    render(<RegisterForm onSubmit={mockOnSubmit} />)

    const submitButton = screen.getByTestId(testId.registerSubmit)

    expect(submitButton).toBeDisabled()
  })

  it("submit button becomes disabled when form is invalid", async () => {
    render(<RegisterForm onSubmit={mockOnSubmit} />)

    const submitButton = screen.getByTestId(testId.registerSubmit)
    const emailInput = screen.getByTestId(testId.email)
    const passwordInput = screen.getByTestId(testId.password)
    const confirmPasswordInput = screen.getByTestId(testId.confirmPassword)

    await userEvent.type(emailInput, mockInfo.invalidEmail)
    await userEvent.type(passwordInput, mockInfo.validPassword)
    await userEvent.type(
      confirmPasswordInput,
      `${mockInfo.invalidPassword}{enter}`
    )

    expect(submitButton).toBeDisabled()
  })

  it("submit button becomes enabled when form is valid", async () => {
    render(<RegisterForm onSubmit={mockOnSubmit} />)

    const submitButton = screen.getByTestId(testId.registerSubmit)
    const emailInput = screen.getByTestId(testId.email)
    const passwordInput = screen.getByTestId(testId.password)
    const confirmPasswordInput = screen.getByTestId(testId.confirmPassword)

    expect(submitButton).toBeDisabled()

    await userEvent.type(emailInput, mockInfo.validEmail)
    await userEvent.type(passwordInput, mockInfo.validPassword)
    await userEvent.type(confirmPasswordInput, mockInfo.validPassword)

    expect(submitButton).toBeEnabled()
  })

  it("form is not submitted when invalid", async () => {
    render(<RegisterForm onSubmit={mockOnSubmit} />)

    const submitButton = screen.getByTestId(testId.registerSubmit)
    const emailInput = screen.getByTestId(testId.email)
    const passwordInput = screen.getByTestId(testId.password)
    const confirmPasswordInput = screen.getByTestId(testId.confirmPassword)

    await userEvent.type(emailInput, mockInfo.invalidEmail)
    await userEvent.type(passwordInput, mockInfo.validPassword)
    await userEvent.type(confirmPasswordInput, mockInfo.invalidPassword)

    expect(submitButton).toBeDisabled()
    expect(mockOnSubmit).not.toHaveBeenCalled()
  })

  it("form is submitted when valid", async () => {
    render(<RegisterForm onSubmit={mockOnSubmit} />)

    const submitButton = screen.getByTestId(testId.registerSubmit)
    const emailInput = screen.getByTestId(testId.email)
    const passwordInput = screen.getByTestId(testId.password)
    const confirmPasswordInput = screen.getByTestId(testId.confirmPassword)

    await userEvent.type(emailInput, mockInfo.validEmail)
    await userEvent.type(passwordInput, mockInfo.validPassword)
    await userEvent.type(confirmPasswordInput, mockInfo.validPassword)
    await userEvent.click(submitButton)

    expect(submitButton).toBeEnabled()
    expect(mockOnSubmit).toHaveBeenCalled()
  })
})
