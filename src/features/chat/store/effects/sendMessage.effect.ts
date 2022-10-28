import type { ISendMessagePayload } from "@features/chat/types"

import { MessageService } from "@features/chat/services"

export function sendMessageEffect(payload: ISendMessagePayload) {
  return async () => {
    try {
      await MessageService.send(
        payload.chatId,
        payload.authorId,
        payload.content
      )
    } catch (error) {
      throw new Error("An error ocurred while sending your message!")
    }
  }
}
