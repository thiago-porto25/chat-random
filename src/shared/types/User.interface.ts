import { User as FirebaseUser } from "firebase/auth"

export interface IUser {
  email: FirebaseUser["email"]
  uid: FirebaseUser["uid"]
  displayName: FirebaseUser["displayName"]
  metadata: FirebaseUser["metadata"]
}
