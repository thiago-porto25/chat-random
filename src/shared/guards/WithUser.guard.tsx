import { useEffect, useMemo } from "react"
import { useRouter } from "next/router"

import { useAppSelector } from "@src/shared/hooks"
import * as ROUTES from "@src/shared/constants/routes"

import { selectAuthUser } from "@src/features/auth/store/selectors"

export const WithUserGuard = () => {
  const user = useAppSelector(selectAuthUser)
  const router = useRouter()
  const loading = useMemo(() => !user, [user])

  useEffect(() => {
    if (!user) {
      router.push(`${ROUTES.LANDING}`)
    }
  }, [user, router])

  return loading
}
