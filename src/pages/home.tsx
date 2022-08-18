import type { NextPage } from "next"

import { WithUserGuard } from "@src/shared/guards"
import { LoadingLayout } from "@src/shared/layouts"

const Home: NextPage = () => {
  const loading = WithUserGuard()

  if (loading) return <LoadingLayout />

  return <div>Homepage</div>
}

export default Home
