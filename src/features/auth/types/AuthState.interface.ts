import { AuthError } from "firebase/auth"

import { Status, User } from "@src/shared/types"

export interface IAuthState {
  status: Status
  error: AuthError | null | string
  user: User | null | undefined
}
