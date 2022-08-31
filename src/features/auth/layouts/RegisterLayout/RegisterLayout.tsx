import { useEffect } from "react"
import {
  ClickableIcon,
  CloseIcon,
  Logo,
  Spacer,
  Typography,
} from "@thiagoporto/minim-ui"

import { testId } from "@src/test-utils"

import { useAppDispatch } from "@src/shared/hooks"

import type { ILayoutProps } from "@features/auth/types"
import { registerEffect } from "@features/auth/store/effects/register.effect"
import { RegisterForm } from "@features/auth/components"

import { AuthContainer, AuthCloseIconContainer } from "../styles"

export const RegisterLayout: React.FC<ILayoutProps> = ({ close }) => {
  const dispatch = useAppDispatch()

  const handleRegister = (email: string, password: string) => {
    dispatch(registerEffect({ email, password }))
  }

  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <AuthContainer data-testid={testId.registerModal}>
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

      <Typography textStyle="heading2" as="h1">
        Signup
      </Typography>

      <Spacer variant="stack" size="xxs" />

      <RegisterForm onSubmit={handleRegister} />
    </AuthContainer>
  )
}
