import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { IUser } from "@src/shared/types"

import type {
  IChatDocument,
  IChatState,
  IFindOrCreateCreatedPayload,
  IFindOrCreateFoundPayload,
  IMessageDocument,
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

    chatWithBotAction: (state, action: PayloadAction<IUser>) => {
      state.isChattingWithBot = true
      state.chatData = {
        full: true,
        messages: [],
        participants: [action.payload.uid, "CHATBOT"],
      }
    },
    leaveBotChatAction: (state) => {
      state.isChattingWithBot = false
      state.chatId = null
    },
    updateMessagesWithBotAction: (
      state,
      action: PayloadAction<IMessageDocument>
    ) => {
      if (state.chatData) {
        state.chatData.messages = [...state.chatData.messages, action.payload]
      }
    },

    updateChatAction: (state, action: PayloadAction<IChatDocument>) => {
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
  updateChatAction,
  leaveBotChatAction,
  updateMessagesWithBotAction,
} = chatSlice.actions

export default chatSlice.reducer
