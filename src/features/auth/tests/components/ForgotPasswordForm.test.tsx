// TODO create tests
import { ForgotPasswordForm } from "@features/auth/components"
import { render } from "@src/test-utils"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "jest-axe"

import { mockInfo, testId } from "@src/test-utils"

describe("Feature: Auth - Component: ForgotPasswordForm", () => {
  const mockOnSubmit = jest.fn()

  it("should render without errors", () => {
    render(<ForgotPasswordForm onSubmit={mockOnSubmit} />)

    const form = screen.getByTestId(testId.resetForm)

    expect(form).toBeInTheDocument()
  })

  it("should pass an accessibility test", async () => {
    const { container } = render(<ForgotPasswordForm onSubmit={mockOnSubmit} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  it("submit button becomes disabled at the start", () => {
    render(<ForgotPasswordForm onSubmit={mockOnSubmit} />)

    const submitButton = screen.getByTestId(testId.resetSubmit)

    expect(submitButton).toBeDisabled()
  })

  it("submit button becomes disabled when form is invalid", async () => {
    render(<ForgotPasswordForm onSubmit={mockOnSubmit} />)

    const submitButton = screen.getByTestId(testId.resetSubmit)
    const emailInput = screen.getByTestId(testId.email)

    await userEvent.type(emailInput, mockInfo.invalidEmail)

    expect(submitButton).toBeDisabled()
  })

  it("submit button becomes enabled when form is valid", async () => {
    render(<ForgotPasswordForm onSubmit={mockOnSubmit} />)

    const submitButton = screen.getByTestId(testId.resetSubmit)
    const emailInput = screen.getByTestId(testId.email)

    expect(submitButton).toBeDisabled()

    await userEvent.type(emailInput, mockInfo.validEmail)

    expect(submitButton).toBeEnabled()
  })

  it("form is not submitted when invalid", async () => {
    render(<ForgotPasswordForm onSubmit={mockOnSubmit} />)

    const submitButton = screen.getByTestId(testId.resetSubmit)
    const emailInput = screen.getByTestId(testId.email)

    await userEvent.type(emailInput, `${mockInfo.invalidEmail}{enter}`)

    expect(submitButton).toBeDisabled()
    expect(mockOnSubmit).not.toHaveBeenCalled()
  })

  it("form is submitted when valid", async () => {
    render(<ForgotPasswordForm onSubmit={mockOnSubmit} />)

    const submitButton = screen.getByTestId(testId.resetSubmit)
    const emailInput = screen.getByTestId(testId.email)

    await userEvent.type(emailInput, mockInfo.validEmail)
    await userEvent.click(submitButton)

    expect(submitButton).toBeEnabled()
    expect(mockOnSubmit).toHaveBeenCalled()
  })
})
