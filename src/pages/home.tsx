import type { NextPage } from "next"

import { WithUserGuard } from "@src/shared/guards"
import { LoadingLayout } from "@src/shared/layouts"

import { HomeLayout } from "@src/features/home/layout"

const Home: NextPage = () => {
  const loading = WithUserGuard()

  if (loading) return <LoadingLayout />

  return <HomeLayout />
}

export default Home
