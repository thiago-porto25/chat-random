export interface IAuthFormProps {
  onSubmit: (email: string, password: string) => void
}

export interface IResetFormProps {
  onSubmit: (email: string) => void
}
