import { useEffect } from "react"
import {
  ClickableIcon,
  CloseIcon,
  Logo,
  Spacer,
  Typography,
} from "@thiagoporto/minim-ui"

import { useAppDispatch } from "@src/shared/hooks"

import type { ILayoutProps } from "@features/auth/types"
import { register } from "@features/auth/store/auth.slice"
import { RegisterForm } from "@features/auth/components"

import { AuthContainer, AuthCloseIconContainer } from "../styles"

export const RegisterLayout: React.FC<ILayoutProps> = ({ close }) => {
  const dispatch = useAppDispatch()

  const handleRegister = (email: string, password: string) => {
    dispatch(register({ email, password }))
  }

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

      <RegisterForm onSubmit={handleRegister} />
    </AuthContainer>
  )
}
