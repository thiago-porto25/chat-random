import type { NextPage } from "next"

import { WithUserGuard } from "@src/shared/guards"
import { LoadingLayout } from "@src/shared/layouts"
import { ErrorBoundary } from "@src/shared/components"

import { WithChatGuard } from "@src/features/chat/guards"
import { ChatLayout } from "@src/features/chat/layouts"

const Chat: NextPage = () => {
  const loadingUser = WithUserGuard()
  const loadingChat = WithChatGuard()

  if (loadingChat || loadingUser) return <LoadingLayout />

  return (
    <ErrorBoundary>
      <ChatLayout />
    </ErrorBoundary>
  )
}

export default Chat
