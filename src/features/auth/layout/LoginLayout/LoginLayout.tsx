import { useEffect, useState } from "react"
import {
  ClickableIcon,
  CloseIcon,
  Logo,
  Spacer,
  Typography,
} from "@thiagoporto/minim-ui"

import type { ILayoutProps } from "@features/auth/types"
import { LoginForm, ForgotPasswordForm } from "@features/auth/components"

import { AuthCloseIconContainer, AuthContainer } from "../styles"

export const LoginLayout: React.FC<ILayoutProps> = ({ close }) => {
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <AuthContainer>
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

          <ForgotPasswordForm
            onSubmit={() => {
              return
            }}
          />
        </>
      ) : (
        <>
          <Typography textStyle="heading2" as="h1">
            Login
          </Typography>

          <Spacer variant="stack" size="xxs" />

          <LoginForm
            openForgotPassword={() => setForgotPasswordOpen(true)}
            onSubmit={() => {
              return
            }}
          />
        </>
      )}
    </AuthContainer>
  )
}
// TODO: create layout
