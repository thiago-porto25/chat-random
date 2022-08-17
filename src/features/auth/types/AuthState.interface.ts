import { AuthError, User } from "firebase/auth"
import { Status } from "@src/shared/types"

export interface IAuthState {
  status: Status
  error: AuthError | null | string
  user: User | null
}
