import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import type { RootState } from "@src/store"

import { IUser } from "@src/shared/types"

import type {
  IAuthPayload,
  IAuthState,
  IResetPayload,
} from "@features/auth/types"
import { AuthService } from "@features/auth/services"

// Define the initial state using that type
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
      .addCase(login.pending, (state) => {
        state.status = "loading"
      })
      .addCase(login.fulfilled, (state) => {
        state.status = "succeeded"
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Something went wrong"
      })
      // Logout
      .addCase(logout.pending, (state) => {
        state.status = "loading"
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = "succeeded"
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Something went wrong"
      })
      // Register
      .addCase(register.pending, (state) => {
        state.status = "loading"
      })
      .addCase(register.fulfilled, (state) => {
        state.status = "succeeded"
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Something went wrong"
      })
      // Reset Password
      .addCase(resetPassword.pending, (state) => {
        state.status = "loading"
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.status = "succeeded"
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Something went wrong"
      })
  },
})

export const { removeUser, saveUser, clearAuthError } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAuthUser = (state: RootState) => state.auth.user
export const selectAuthStatus = (state: RootState) => state.auth.status
export const selectAuthError = (state: RootState) => state.auth.error

export default authSlice.reducer

// Thunks
export const login = createAsyncThunk(
  "auth/login",
  async (payload: IAuthPayload) => {
    try {
      return await AuthService.login(payload.email, payload.password)
    } catch (error) {
      return Promise.reject(error)
    }
  }
)

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    return await AuthService.logout()
  } catch (error) {
    return Promise.reject(error)
  }
})

export const register = createAsyncThunk(
  "auth/register",
  async (payload: IAuthPayload) => {
    try {
      return await AuthService.register(payload.email, payload.password)
    } catch (error) {
      return Promise.reject(error)
    }
  }
)

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (payload: IResetPayload) => {
    try {
      await AuthService.resetPassword(payload.email)
      payload.successCallback()
    } catch (error) {
      return Promise.reject(error)
    }
  }
)
