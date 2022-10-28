import type { AppDispatch } from "@src/store"

import { CHAT } from "@src/shared/constants/routes"

import type { IFindOrCreateChatPayload } from "@features/chat/types"
import {
  findOrCreateCreatedAction,
  findOrCreateFailedAction,
  findOrCreateFoundAction,
  findOrCreateStartAction,
} from "@features/chat/store/chat.slice"
import { ChatService } from "@features/chat/services"

export function findOrCreateChatEffect(payload: IFindOrCreateChatPayload) {
  return async (dispatch: AppDispatch) => {
    dispatch(findOrCreateStartAction())

    try {
      const chatId = await ChatService.find(payload.authUserId)
      dispatch(findOrCreateFoundAction({ chatId }))
      payload.navigate(`/${CHAT}`)
    } catch (error) {
      try {
        const createdChatId = await ChatService.create(payload.authUserId)
        dispatch(findOrCreateCreatedAction({ createdChatId }))
      } catch (e) {
        dispatch(findOrCreateFailedAction())
      }
    }
  }
}
