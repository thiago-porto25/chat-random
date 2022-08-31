import { createAsyncThunk } from "@reduxjs/toolkit"

import type { IAuthPayload } from "@features/auth/types"
import { AuthService } from "@features/auth/services"

export const registerEffect = createAsyncThunk(
  "auth/register",
  async (payload: IAuthPayload) => {
    try {
      return await AuthService.register(payload.email, payload.password)
    } catch (error) {
      return Promise.reject(error)
    }
  }
)
