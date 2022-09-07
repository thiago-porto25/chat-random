import { Timestamp } from "firebase/firestore"

import { AppDispatch } from "@src/store"

import { sleep } from "@src/shared/helpers"

import type { ISendMessageToBotPayload } from "@features/chat/types"
import { updateMessagesWithBotAction } from "@features/chat/store/chat.slice"
import { createBotMessage } from "@features/chat/helpers"

export function sendMessageToBotEffect(payload: ISendMessageToBotPayload) {
  return async (dispatch: AppDispatch) => {
    dispatch(
      updateMessagesWithBotAction({
        authorId: payload.authorId,
        content: payload.content,
        timestamp: new Timestamp(Date.now() / 1000, 100),
      })
    )

    await sleep(500)

    dispatch(
      updateMessagesWithBotAction({
        authorId: "CHATBOT",
        content: createBotMessage(),
        timestamp: new Timestamp(Date.now() / 1000, 100),
      })
    )
  }
}
