import { configureStore } from "@reduxjs/toolkit"
import authSlice from "@features/auth/store/auth.slice"
import chatSlice from "@features/chat/store/chat.slice"

export const store = configureStore({
  reducer: {
    auth: authSlice,
    chat: chatSlice,
  },
})

export type AppGetState = typeof store.getState
export type RootState = ReturnType<AppGetState>
export type AppDispatch = typeof store.dispatch
