import { AuthService } from "@features/auth/services"
import { mockInfo } from "@src/test-utils"

describe("Feature: Auth - Service: Auth", () => {
  it("should be defined", () => {
    expect(AuthService).toBeDefined()
  })

  it("Calling login function should not throw an error", async () => {
    expect(
      async () =>
        await AuthService.login(mockInfo.validEmail, mockInfo.validPassword)
    ).not.toThrow()
  })

  it("Calling logout function should not throw an error", async () => {
    expect(async () => await AuthService.logout()).not.toThrow()
  })

  it("Calling the register function should not throw an error", async () => {
    expect(
      async () =>
        await AuthService.register(mockInfo.validEmail, mockInfo.validPassword)
    ).not.toThrow()
  })

  it("Calling the resetPassword function should not throw an error", async () => {
    expect(
      async () => await AuthService.resetPassword(mockInfo.validEmail)
    ).not.toThrow()
  })
})
