import { useEffect, useMemo } from "react"
import { useRouter } from "next/router"

import { useAppSelector } from "@src/shared/hooks"
import * as ROUTES from "@src/shared/constants/routes"

import { selectAuthUser } from "@src/features/auth/store/selectors"

export const WithoutUserGuard = () => {
  const user = useAppSelector(selectAuthUser)
  const router = useRouter()
  const loading = useMemo(() => !!user || user === undefined, [user])

  useEffect(() => {
    if (user) {
      router.push(`/${ROUTES.HOME}`)
    }
  }, [user, router])

  return loading
}
