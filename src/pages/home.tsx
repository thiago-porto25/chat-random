import type { NextPage } from "next"

import { WithUserGuard } from "@src/shared/guards"
import { LoadingLayout } from "@src/shared/layouts"
import { ErrorBoundary } from "@src/shared/components"

import { HomeLayout } from "@src/features/home/layouts"

const Home: NextPage = () => {
  const loading = WithUserGuard()

  if (loading) return <LoadingLayout />

  return (
    <ErrorBoundary>
      <HomeLayout />
    </ErrorBoundary>
  )
}

export default Home
