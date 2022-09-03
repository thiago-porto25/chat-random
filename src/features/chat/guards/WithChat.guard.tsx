import { useEffect, useMemo } from "react"
import { useRouter } from "next/router"

import { useAppSelector } from "@src/shared/hooks"
import * as ROUTES from "@src/shared/constants/routes"

import {
  selectChatId,
  selectIsChattingWithBot,
} from "@src/features/chat/store/selectors"

export const WithChatGuard = () => {
  const chatId = useAppSelector(selectChatId)
  const isChattingWithBot = useAppSelector(selectIsChattingWithBot)
  const router = useRouter()
  const loading = useMemo(
    () => !chatId && !isChattingWithBot,
    [chatId, isChattingWithBot]
  )

  useEffect(() => {
    if (!chatId && !isChattingWithBot) {
      router.push(`/${ROUTES.HOME}`)
    }
  }, [chatId, router, isChattingWithBot])

  return loading
}
