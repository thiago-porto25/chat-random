export interface IAuthPayload {
  email: string
  password: string
}

export interface IResetPayload {
  email: string
  successCallback: () => void
}
