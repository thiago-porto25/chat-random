import { Form } from "react-final-form"
import { Button, Spacer, GoogleIcon, Typography } from "@thiagoporto/minim-ui"

import { testId } from "@src/test-utils"

import type { IFormProps } from "@features/auth/types"
import { validateLogin } from "@features/auth/validators"
import { FormInput } from "@features/auth/components"

import { StyledForm, ButtonsContainer } from "./styles"

interface ILoginFormProps extends IFormProps {
  openForgotPassword: () => void
}

export const LoginForm: React.FC<ILoginFormProps> = ({
  onSubmit,
  openForgotPassword,
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ email: "", password: "" }}
      validate={validateLogin}
      render={({ handleSubmit, submitting, errors }) => (
        <StyledForm onSubmit={handleSubmit} data-testid={testId.loginForm}>
          <FormInput
            label="Email"
            name="email"
            placeholder="youremail@example.com"
            type="email"
            data-testid={testId.email}
          />

          <Spacer variant="stack" size="xxxs" />

          <FormInput
            label="Password"
            name="password"
            placeholder="***********"
            type="password"
            data-testid={testId.password}
          />

          <Spacer variant="stack" size="nn" />

          <Typography onClick={openForgotPassword} textStyle="link" as="a">
            Forgot your password?
          </Typography>

          <Spacer variant="stack" size="sm" />

          <ButtonsContainer>
            <Button
              disabled={submitting || errors?.email || errors?.password}
              data-testid={testId.loginSubmit}
              type="submit"
            >
              Login
            </Button>

            <Spacer variant="stack" size="nn" />

            <Button
              disabled={submitting || errors?.email || errors?.password}
              type="submit"
              bgColor="white"
              hoverBgColor="gray10"
              activeBgColor="gray20"
              disabledBgColor="gray10"
            >
              <GoogleIcon />
              <Spacer variant="inline" size="nn" />
              Login with Google
            </Button>
          </ButtonsContainer>

          <Spacer variant="stack" size="sm" />
        </StyledForm>
      )}
    />
  )
}
