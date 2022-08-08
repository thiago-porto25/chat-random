import type { ILayoutProps } from "@features/auth/types"
import { RegisterForm } from "@features/auth/components"

export const RegisterLayout: React.FC<ILayoutProps> = ({ close }) => {
  return (
    <RegisterForm
      onSubmit={() => {
        return
      }}
    />
  )
}
// TODO: create Layout
