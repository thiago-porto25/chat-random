import { useEffect, useState } from "react"
import { Unsubscribe } from "firebase/firestore"

import { useAppDispatch, useAppSelector } from "@src/shared/hooks"

import { selectAuthUser } from "@src/features/auth/store/selectors"

import { sendMessageEffect } from "@features/chat/store/effects/sendMessage.effect"
import { ListenMessagesEffect } from "@features/chat/store/effects/listenMessages.effect"
import { selectChatId, selectMessages } from "@features/chat/store/selectors"
import { deleteChatEffect } from "@features/chat/store/effects/deleteChat.effect"

import { Body, Header, Footer } from "@features/chat/components"
import { ChatLayoutContainer, ChatLayoutWrapper } from "./styles"

export const ChatLayout: React.FC = () => {
  const [messageContent, setMessageContent] = useState("")
  const messages = useAppSelector(selectMessages)
  const authUser = useAppSelector(selectAuthUser)
  const chatId = useAppSelector(selectChatId)
  const dispatch = useAppDispatch()

  const handleLeave = () => {
    if (chatId) dispatch(deleteChatEffect({ chatId }))
  }

  const handleSend = () => {
    const authorId = authUser?.uid

    if (authorId && messageContent.trim().length > 0 && chatId) {
      dispatch(
        sendMessageEffect({
          authorId,
          chatId,
          content: messageContent,
        })
      )
      setMessageContent("")
    }
  }

  useEffect(() => {
    let unsub: Unsubscribe | null = null

    if (chatId) {
      unsub = dispatch(ListenMessagesEffect({ chatId }))
    }

    return () => {
      if (unsub !== null) unsub()
    }
  }, [chatId, dispatch])

  return (
    <ChatLayoutWrapper>
      <ChatLayoutContainer>
        <Header onLeave={handleLeave} />
        <Body messages={messages || []} />
        <Footer
          onSend={handleSend}
          content={messageContent}
          setContent={setMessageContent}
        />
      </ChatLayoutContainer>
    </ChatLayoutWrapper>
  )
}
