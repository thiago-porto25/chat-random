import { AuthError } from "firebase/auth"

import { Status, IUser } from "@src/shared/types"

export interface IAuthState {
  status: Status
  error: AuthError | null | string
  user: IUser | null | undefined
}
