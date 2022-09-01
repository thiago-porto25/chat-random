import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import { IUser } from "@src/shared/types"

import type { IAuthState } from "@features/auth/types"
import { loginEffect } from "@features/auth/store/effects/login.effect"
import { registerEffect } from "@features/auth/store/effects/register.effect"
import { resetPasswordEffect } from "@features/auth/store/effects/resetPassword.effect"
import { logoutEffect } from "@features/auth/store/effects/logout.effect"

const initialState: IAuthState = {
  status: "idle",
  error: null,
  user: undefined,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
    },
    removeUser: (state) => {
      state.user = null
    },
    clearAuthError: (state) => {
      state.error = null
    },
  },
  extraReducers(builder) {
    builder
      //Login
      .addCase(loginEffect.pending, (state) => {
        state.status = "loading"
      })
      .addCase(loginEffect.fulfilled, (state) => {
        state.status = "succeeded"
      })
      .addCase(loginEffect.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Something went wrong"
      })
      // Logout
      .addCase(logoutEffect.pending, (state) => {
        state.status = "loading"
      })
      .addCase(logoutEffect.fulfilled, (state) => {
        state.status = "succeeded"
      })
      .addCase(logoutEffect.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Something went wrong"
      })
      // Register
      .addCase(registerEffect.pending, (state) => {
        state.status = "loading"
      })
      .addCase(registerEffect.fulfilled, (state) => {
        state.status = "succeeded"
      })
      .addCase(registerEffect.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Something went wrong"
      })
      // Reset Password
      .addCase(resetPasswordEffect.pending, (state) => {
        state.status = "loading"
      })
      .addCase(resetPasswordEffect.fulfilled, (state) => {
        state.status = "succeeded"
      })
      .addCase(resetPasswordEffect.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Something went wrong"
      })
  },
})

export const { removeUser, saveUser, clearAuthError } = authSlice.actions

export default authSlice.reducer
