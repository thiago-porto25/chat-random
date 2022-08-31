import { Form } from "react-final-form"
import { FormInput } from "@features/auth/components"
import { render } from "@src/test-utils"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "jest-axe"

import { mockInfo, testId } from "@src/test-utils"

import { useAppSelector } from "@src/shared/hooks"

import { selectAuthError } from "@features/auth/store/selectors"
import { validateForgotPassword } from "@features/auth/validators"

const MockComponent = () => {
  const error = useAppSelector(selectAuthError)

  return (
    <Form
      onSubmit={() => {
        return
      }}
      initialValues={{ email: "" }}
      validate={(values: { email: string }) =>
        validateForgotPassword(values, error)
      }
      render={({ handleSubmit, submitting, errors }) => (
        <form onSubmit={handleSubmit} data-testid={testId.resetForm}>
          <div>nothing</div>

          <FormInput
            label="Email"
            name="email"
            placeholder="youremail@example.com"
            type="email"
            data-testid={testId.email}
          />

          <button
            disabled={submitting || errors?.email}
            data-testid={testId.resetSubmit}
            type="submit"
          >
            Send
          </button>
        </form>
      )}
    />
  )
}

describe("Feature: Auth - Component: FormInput", () => {
  it("should render without errors", () => {
    render(<MockComponent />)

    const input = screen.getByTestId(testId.email)

    expect(input).toBeInTheDocument()
  })

  it("should pass an accessibility test", async () => {
    const { container } = render(<MockComponent />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  it("should have a label element when the 'label' prop is defined", () => {
    render(<MockComponent />)

    const label = screen.getByText("Email")

    expect(label).toBeInTheDocument()
  })

  it("should have an input element", () => {
    render(<MockComponent />)

    const input = screen.getByTestId(testId.email)

    expect(input).toBeInTheDocument()
  })

  it("should have a error message if there is an error and it has been touched", async () => {
    render(<MockComponent />)

    const input = screen.getByTestId(testId.email)
    await userEvent.click(input)

    const tempo = screen.getByText("nothing")
    await userEvent.click(tempo)

    const error = await screen.findByText(mockInfo.requiredEmailError)

    expect(error).toBeInTheDocument()
  })

  it("should not have a error message if it has not been touched", () => {
    render(<MockComponent />)

    const error = screen.queryByText(mockInfo.requiredEmailError)

    expect(error).not.toBeInTheDocument()
  })

  it("error message should have correct text depending on the error", async () => {
    render(<MockComponent />)

    const input = screen.getByTestId(testId.email)
    await userEvent.click(input)

    const tempo = screen.getByText("nothing")
    await userEvent.click(tempo)

    const error = screen.getByText(mockInfo.requiredEmailError)
    expect(error).toBeInTheDocument()

    await userEvent.type(input, mockInfo.invalidEmail)

    const error2 = screen.getByText(mockInfo.invalidEmailError)
    expect(error2).toBeInTheDocument()
  })

  it("error message should disappear when error is gone", async () => {
    render(<MockComponent />)

    const input = screen.getByTestId(testId.email)
    await userEvent.click(input)

    const tempo = screen.getByText("nothing")
    await userEvent.click(tempo)

    await userEvent.type(input, mockInfo.validEmail)

    const error = screen.queryByText(mockInfo.requiredEmailError)
    expect(error).not.toBeInTheDocument()
  })
})
