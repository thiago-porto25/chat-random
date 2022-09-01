import type { AppDispatch } from "@src/store"

import type { IDeleteChatPayload } from "@features/chat/types"
import { resetChatStateAction } from "@features/chat/store/chat.slice"
import { ChatService } from "@features/chat/services"

export function deleteChatEffect(payload: IDeleteChatPayload) {
  return async (dispatch: AppDispatch) => {
    try {
      await ChatService.delete(payload.chatId)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    } finally {
      dispatch(resetChatStateAction())
    }
  }
}
