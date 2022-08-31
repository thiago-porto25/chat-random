import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import type {
  IChatState,
  IFindOrCreateCreatedPayload,
  IFindOrCreateFoundPayload,
} from "@features/chat/types"

const initialState: IChatState = {
  findOrCreateChatStatus: "idle",
  chatId: null,
  isChattingWithBot: false,
  //TODO: add chat Object as property to chat state, create selector for its value
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
  },
})

export const {
  resetChatStateAction,
  findOrCreateStartAction,
  findOrCreateFailedAction,
  findOrCreateFoundAction,
  findOrCreateCreatedAction,
  chatWithBotAction,
} = chatSlice.actions

export default chatSlice.reducer
