import { createAsyncThunk } from "@reduxjs/toolkit"

import type { IResetPayload } from "@features/auth/types"
import { AuthService } from "@features/auth/services"

export const resetPasswordEffect = createAsyncThunk(
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
