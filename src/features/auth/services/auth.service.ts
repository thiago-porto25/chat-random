import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth"

import { auth } from "@src/firebase"

export class AuthService {
  public static async login(email: string, password: string): Promise<void> {
    await signInWithEmailAndPassword(auth, email, password)
  }

  public static async logout(): Promise<void> {
    await signOut(auth)
  }

  public static async register(email: string, password: string): Promise<void> {
    await createUserWithEmailAndPassword(auth, email, password)
  }

  public static async resetPassword(email: string): Promise<void> {
    await sendPasswordResetEmail(auth, email)
  }
}
