import { useEffect } from "react"
import {
  ClickableIcon,
  CloseIcon,
  Logo,
  Spacer,
  Typography,
} from "@thiagoporto/minim-ui"

import type { ILayoutProps } from "@features/auth/types"
import { RegisterForm } from "@features/auth/components"

import { AuthContainer, AuthCloseIconContainer } from "../styles"

export const RegisterLayout: React.FC<ILayoutProps> = ({ close }) => {
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

      <Typography textStyle="heading2" as="h1">
        Signup
      </Typography>

      <Spacer variant="stack" size="xxs" />

      <RegisterForm
        onSubmit={() => {
          return
        }}
      />
    </AuthContainer>
  )
}
