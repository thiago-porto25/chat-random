import type { RootState } from "@src/store"

export const selectChatFindStatus = (state: RootState) =>
  state.chat.findOrCreateChatStatus

export const selectChatId = (state: RootState) => state.chat.chatId
