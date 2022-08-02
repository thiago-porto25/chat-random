import type { NextPage } from "next"

import { LandingLayout } from "@src/features/landing"
import { WithAuth } from "@src/shared/guards"

const Landing: NextPage = () => {
  WithAuth()
  return <LandingLayout />
}

export default Landing
