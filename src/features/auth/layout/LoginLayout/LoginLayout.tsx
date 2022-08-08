import { useState } from "react"

import type { ILayoutProps } from "@features/auth/types"
import { LoginForm } from "@features/auth/components"
import { ForgotPasswordForm } from "@features/auth/components"

export const LoginLayout: React.FC<ILayoutProps> = ({ close }) => {
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false)

  return forgotPasswordOpen ? (
    <ForgotPasswordForm
      onSubmit={() => {
        return
      }}
    />
  ) : (
    <LoginForm
      openForgotPassword={() => setForgotPasswordOpen(true)}
      onSubmit={() => {
        return
      }}
    />
  )
}
// TODO: create layout
