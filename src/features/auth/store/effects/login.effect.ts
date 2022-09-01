import { createAsyncThunk } from "@reduxjs/toolkit"

import type { IAuthPayload } from "@features/auth/types"
import { AuthService } from "@features/auth/services"

export const loginEffect = createAsyncThunk(
  "auth/login",
  async (payload: IAuthPayload) => {
    try {
      return await AuthService.login(payload.email, payload.password)
    } catch (error) {
      return Promise.reject(error)
    }
  }
)
