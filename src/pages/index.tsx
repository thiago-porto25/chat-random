import type { NextPage } from "next"

import { LandingLayout } from "@src/features/landing"

import { WithoutUserGuard } from "@src/shared/guards"
import { LoadingLayout } from "@src/shared/layouts"

const Landing: NextPage = () => {
  const loading = WithoutUserGuard()

  if (loading) return <LoadingLayout />

  return <LandingLayout />
}

export default Landing
