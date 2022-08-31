import type { NextPage } from "next"

import { WithUserGuard } from "@src/shared/guards"
import { LoadingLayout } from "@src/shared/layouts"

const Chat: NextPage = () => {
  const loading = WithUserGuard()

  if (loading) return <LoadingLayout />

  return <div>Chat page</div>
}

export default Chat
