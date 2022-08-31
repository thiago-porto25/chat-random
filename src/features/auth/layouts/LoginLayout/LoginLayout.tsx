import { useEffect, useState } from "react"
import {
  ClickableIcon,
  CloseIcon,
  Logo,
  Spacer,
  Toast,
  Typography,
} from "@thiagoporto/minim-ui"

import { testId } from "@src/test-utils"

import { useAppDispatch } from "@src/shared/hooks"

import type { ILayoutProps } from "@features/auth/types"
import { loginEffect } from "@features/auth/store/effects/login.effect"
import { resetPasswordEffect } from "@features/auth/store/effects/resetPassword.effect"

import { LoginForm, ForgotPasswordForm } from "@features/auth/components"
import { AuthCloseIconContainer, AuthContainer } from "../styles"

export const LoginLayout: React.FC<ILayoutProps> = ({ close }) => {
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false)
  const [toastOpen, setToastOpen] = useState(false)
  const dispatch = useAppDispatch()

  const handleLogin = (email: string, password: string) => {
    dispatch(loginEffect({ email, password }))
  }

  const handleForgotPassword = (email: string) => {
    dispatch(resetPasswordEffect({ email, successCallback }))
  }

  const successCallback = () => {
    setToastOpen(true)
  }

  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <AuthContainer>
      <Toast
        isOpen={toastOpen}
        close={setToastOpen}
        type="success"
        message="E-mail sent. Check your inbox for a link to reset your password."
        verticalPosition="top"
        duration={5000}
      />

      <AuthCloseIconContainer>
        <ClickableIcon
          tabIndex={0}
          data-testid={testId.closeIcon}
          onClick={() => close(false)}
        >
          <CloseIcon />
        </ClickableIcon>
      </AuthCloseIconContainer>

      <Logo />

      <Spacer variant="stack" size="xxxs" />

      {forgotPasswordOpen ? (
        <>
          <Typography
            data-testid={testId.resetModal}
            textStyle="heading2"
            as="h1"
          >
            Reset Password
          </Typography>

          <Spacer variant="stack" size="xxxs" />

          <Typography>
            We&apos;ll send you a link to reset your account&apos;s password.
          </Typography>

          <Spacer variant="stack" size="xxs" />

          <ForgotPasswordForm onSubmit={handleForgotPassword} />
        </>
      ) : (
        <>
          <Typography
            data-testid={testId.loginModal}
            textStyle="heading2"
            as="h1"
          >
            Login
          </Typography>

          <Spacer variant="stack" size="xxs" />

          <LoginForm
            openForgotPassword={() => setForgotPasswordOpen(true)}
            onSubmit={handleLogin}
          />
        </>
      )}
    </AuthContainer>
  )
}
