import { FirebaseError } from "firebase/app"
import { Auth, createUserWithEmailAndPassword } from "firebase/auth"

export const createTestUser = async (auth: Auth): Promise<boolean> => {
  try {
    await createUserWithEmailAndPassword(auth, "email@email.com", "password123")

    return true
  } catch (error) {
    const e = error as FirebaseError
    if (/email-already-in-use/i.test(e?.message)) return true
    return false
  }
}
