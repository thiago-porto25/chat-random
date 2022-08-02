import { useState, useCallback, useEffect } from "react"
import { useRouter } from "next/router"
import { onAuthStateChanged, User } from "firebase/auth"

import { auth } from "@src/firebase"

export const WithAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  const observeAuthState = useCallback(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } else {
          setUser(null)
        }
      }),
    []
  )

  useEffect(() => {
    return () => {
      observeAuthState()
    }
  }, [observeAuthState])

  if (user) {
    router.push("/home")
    return
  }

  return
}
