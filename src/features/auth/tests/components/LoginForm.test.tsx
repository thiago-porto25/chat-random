import { LoginForm } from "@features/auth/components"
import { render } from "@src/test-utils"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "jest-axe"

import { mockInfo, testId } from "@src/test-utils"

const onSubmit = jest.fn()
const openForgotPassword = jest.fn()

describe("Feature: Auth - Component: LoginForm", () => {
  it("should render without errors", () => {
    render(
      <LoginForm onSubmit={onSubmit} openForgotPassword={openForgotPassword} />
    )

    const form = screen.getByTestId(testId.loginForm)

    expect(form).toBeInTheDocument()
  })

  it("should pass an accessibility test", async () => {
    const { container } = render(
      <LoginForm onSubmit={onSubmit} openForgotPassword={openForgotPassword} />
    )
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  it("submit button becomes disabled at the start", () => {
    render(
      <LoginForm onSubmit={onSubmit} openForgotPassword={openForgotPassword} />
    )

    const submitButton = screen.getByTestId(testId.loginSubmit)

    expect(submitButton).toBeDisabled()
  })

  it("submit button becomes disabled when form is invalid", async () => {
    render(
      <LoginForm onSubmit={onSubmit} openForgotPassword={openForgotPassword} />
    )

    const submitButton = screen.getByTestId(testId.loginSubmit)
    const emailInput = screen.getByTestId(testId.email)
    const passwordInput = screen.getByTestId(testId.password)

    await userEvent.type(emailInput, mockInfo.invalidEmail)
    await userEvent.type(passwordInput, mockInfo.invalidPassword)

    expect(submitButton).toBeDisabled()
  })

  it("submit button becomes enabled when form is valid", async () => {
    render(
      <LoginForm onSubmit={onSubmit} openForgotPassword={openForgotPassword} />
    )

    const submitButton = screen.getByTestId(testId.loginSubmit)
    const emailInput = screen.getByTestId(testId.email)
    const passwordInput = screen.getByTestId(testId.password)

    expect(submitButton).toBeDisabled()

    await userEvent.type(emailInput, mockInfo.validEmail)
    await userEvent.type(passwordInput, mockInfo.validPassword)

    expect(submitButton).toBeEnabled()
  })

  it("form is not submitted when invalid", async () => {
    render(
      <LoginForm onSubmit={onSubmit} openForgotPassword={openForgotPassword} />
    )

    const submitButton = screen.getByTestId(testId.loginSubmit)
    const emailInput = screen.getByTestId(testId.email)
    const passwordInput = screen.getByTestId(testId.password)

    await userEvent.type(emailInput, mockInfo.invalidEmail)
    await userEvent.type(passwordInput, `${mockInfo.invalidPassword}{enter}`)

    expect(submitButton).toBeDisabled()
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it("form is submitted when valid", async () => {
    render(
      <LoginForm onSubmit={onSubmit} openForgotPassword={openForgotPassword} />
    )

    const submitButton = screen.getByTestId(testId.loginSubmit)
    const emailInput = screen.getByTestId(testId.email)
    const passwordInput = screen.getByTestId(testId.password)

    await userEvent.type(emailInput, mockInfo.validEmail)
    await userEvent.type(passwordInput, mockInfo.validPassword)
    await userEvent.click(submitButton)

    expect(submitButton).toBeEnabled()
    expect(onSubmit).toHaveBeenCalled()
  })
})
