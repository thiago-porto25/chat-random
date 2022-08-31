import { useCallback, useEffect } from "react"
import { Form } from "react-final-form"
import { Button, Spacer, Typography } from "@thiagoporto/minim-ui"

import { testId } from "@src/test-utils"

import { useAppDispatch, useAppSelector } from "@src/shared/hooks"

import type { IAuthFormProps, ILoginFormValues } from "@features/auth/types"
import { clearAuthError } from "@features/auth/store/auth.slice"
import {
  selectAuthError,
  selectAuthStatus,
} from "@features/auth/store/selectors"
import { validateLogin } from "@features/auth/validators"

import { FormInput } from "@features/auth/components"
import { StyledForm, ButtonsContainer } from "./styles"

interface ILoginFormProps extends IAuthFormProps {
  openForgotPassword: () => void
}

export const LoginForm: React.FC<ILoginFormProps> = ({
  onSubmit,
  openForgotPassword,
}) => {
  const dispatch = useAppDispatch()
  const error = useAppSelector(selectAuthError)
  const status = useAppSelector(selectAuthStatus)

  const clearErrors = useCallback(() => {
    if (error) dispatch(clearAuthError())
  }, [error, dispatch])

  useEffect(() => {
    return () => {
      dispatch(clearAuthError())
    }
  }, [dispatch])

  return (
    <Form
      onSubmit={({ email, password }) => onSubmit(email, password)}
      initialValues={{ email: "", password: "" }}
      validate={(values: ILoginFormValues) => validateLogin(values, error)}
      render={({ handleSubmit, submitting, errors }) => (
        <StyledForm onSubmit={handleSubmit} data-testid={testId.loginForm}>
          <FormInput
            label="Email"
            name="email"
            placeholder="youremail@example.com"
            type="email"
            data-testid={testId.email}
            autoComplete="email"
            onChange={clearErrors}
          />

          <Spacer variant="stack" size="xxxs" />

          <FormInput
            label="Password"
            name="password"
            placeholder="••••••••"
            type="password"
            data-testid={testId.password}
            autoComplete="current-password"
            onChange={clearErrors}
          />

          <Spacer variant="stack" size="nn" />

          <Typography
            onClick={openForgotPassword}
            textStyle="link"
            as="a"
            tabIndex={0}
            data-testid={testId.resetButton}
          >
            Forgot your password?
          </Typography>

          <Spacer variant="stack" size="sm" />

          <ButtonsContainer>
            <Button
              disabled={
                status === "loading" ||
                submitting ||
                errors?.email ||
                errors?.password
              }
              data-testid={testId.loginSubmit}
              type="submit"
              isLoading={status === "loading"}
            >
              Login
            </Button>
          </ButtonsContainer>

          <Spacer variant="stack" size="md" />
        </StyledForm>
      )}
    />
  )
}
