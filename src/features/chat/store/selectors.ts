import type { RootState } from "@src/store"

export const selectChatFindStatus = (state: RootState) =>
  state.chat.findOrCreateChatStatus

export const selectChatId = (state: RootState) => state.chat.chatId

export const selectChatData = (state: RootState) => state.chat.chatData

export const selectMessages = (state: RootState) =>
  state.chat.chatData?.messages

export const selectIsChattingWithBot = (state: RootState) =>
  state.chat.isChattingWithBot
