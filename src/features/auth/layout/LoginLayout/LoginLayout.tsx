import { useEffect, useState } from "react"
import {
  ClickableIcon,
  CloseIcon,
  Logo,
  Spacer,
  Toast,
  Typography,
} from "@thiagoporto/minim-ui"

import { useAppDispatch } from "@src/shared/hooks"

import type { ILayoutProps } from "@features/auth/types"
import { login, resetPassword } from "@features/auth/store/auth.slice"
import { LoginForm, ForgotPasswordForm } from "@features/auth/components"

import { AuthCloseIconContainer, AuthContainer } from "../styles"

export const LoginLayout: React.FC<ILayoutProps> = ({ close }) => {
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false)
  const [toastOpen, setToastOpen] = useState(false)
  const dispatch = useAppDispatch()

  const handleLogin = (email: string, password: string) => {
    dispatch(login({ email, password }))
  }

  const handleForgotPassword = (email: string) => {
    dispatch(resetPassword({ email, successCallback }))
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
        <ClickableIcon onClick={() => close(false)}>
          <CloseIcon />
        </ClickableIcon>
      </AuthCloseIconContainer>

      <Logo />

      <Spacer variant="stack" size="xxxs" />

      {forgotPasswordOpen ? (
        <>
          <Typography textStyle="heading2" as="h1">
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
          <Typography textStyle="heading2" as="h1">
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
