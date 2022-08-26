import { onSnapshot, doc } from "firebase/firestore"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { chatsCollection } from "@src/firebase"

import type { AppDispatch, RootState } from "@src/store"

import { CHAT } from "@src/shared/constants/routes"

import type {
  IChatState,
  IFindOrCreateChatPayload,
  IFindOrCreateCreatedPayload,
  IFindOrCreateSuccessPayload,
  IInitializeCreatedChatListenerPayload,
} from "@features/chat/types"
import { ChatService } from "@features/chat/services"

// Define the initial state using that type
const initialState: IChatState = {
  findOrCreateChatStatus: "idle",
  chatId: null,
}

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    resetChatState: () => initialState,

    findOrCreateStart: (state) => {
      state.findOrCreateChatStatus = "loading"
    },
    findOrCreateSuccess: (
      state,
      action: PayloadAction<IFindOrCreateSuccessPayload>
    ) => {
      state.findOrCreateChatStatus = "succeeded"
      state.chatId = action.payload.chatId
    },
    findOrCreateCreated: (
      state,
      action: PayloadAction<IFindOrCreateCreatedPayload>
    ) => {
      state.findOrCreateChatStatus = "created"
      state.chatId = action.payload.createdChatId
    },
    findOrCreateFailed: (state) => {
      state.findOrCreateChatStatus = "failed"
    },
  },
})

export const {
  resetChatState,
  findOrCreateStart,
  findOrCreateFailed,
  findOrCreateSuccess,
  findOrCreateCreated,
} = chatSlice.actions

export default chatSlice.reducer

// Other code such as selectors can use the imported `RootState` type
export const selectChatFindStatus = (state: RootState) =>
  state.chat.findOrCreateChatStatus

export const selectChatId = (state: RootState) => state.chat.chatId

// Thunks
export function initializeCreatedChatListener(
  payload: IInitializeCreatedChatListenerPayload
) {
  return () =>
    onSnapshot(doc(chatsCollection, payload.chatId), (doc) => {
      if (doc.data()?.participants.length === 2) payload.navigate(`/${CHAT}`)
    })
}

export function findOrCreateChat(payload: IFindOrCreateChatPayload) {
  return async (dispatch: AppDispatch) => {
    dispatch(findOrCreateStart())

    try {
      const chatId = await ChatService.find(payload.authUserId)
      dispatch(findOrCreateSuccess({ chatId }))
      payload.navigate(`/${CHAT}`)
    } catch (error) {
      try {
        const createdChatId = await ChatService.create(payload.authUserId)
        dispatch(findOrCreateCreated({ createdChatId }))
      } catch (e) {
        dispatch(findOrCreateFailed())
      }
    }
  }
}
