import { createAsyncThunk } from "@reduxjs/toolkit"

import { AuthService } from "@features/auth/services"

export const logoutEffect = createAsyncThunk("auth/logout", async () => {
  try {
    return await AuthService.logout()
  } catch (error) {
    return Promise.reject(error)
  }
})
