import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import type {
  IChatDocument,
  IChatState,
  IFindOrCreateCreatedPayload,
  IFindOrCreateFoundPayload,
} from "@features/chat/types"

const initialState: IChatState = {
  findOrCreateChatStatus: "idle",
  chatId: null,
  isChattingWithBot: false,
  chatData: null,
}

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    resetChatStateAction: () => initialState,

    findOrCreateStartAction: (state) => {
      state.findOrCreateChatStatus = "loading"
    },
    findOrCreateFoundAction: (
      state,
      action: PayloadAction<IFindOrCreateFoundPayload>
    ) => {
      state.findOrCreateChatStatus = "succeeded"
      state.chatId = action.payload.chatId
    },
    findOrCreateCreatedAction: (
      state,
      action: PayloadAction<IFindOrCreateCreatedPayload>
    ) => {
      state.findOrCreateChatStatus = "created"
      state.chatId = action.payload.createdChatId
    },
    findOrCreateFailedAction: (state) => {
      state.findOrCreateChatStatus = "failed"
    },

    chatWithBotAction: (state) => {
      state.isChattingWithBot = true
    },

    updateChat: (state, action: PayloadAction<IChatDocument>) => {
      state.chatData = action.payload
    },
  },
})

export const {
  resetChatStateAction,
  findOrCreateStartAction,
  findOrCreateFailedAction,
  findOrCreateFoundAction,
  findOrCreateCreatedAction,
  chatWithBotAction,
  updateChat,
} = chatSlice.actions

export default chatSlice.reducer
