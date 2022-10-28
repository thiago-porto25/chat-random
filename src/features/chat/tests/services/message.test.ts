import { MessageService } from "@features/chat/services"

describe("Feature: Message - Service: Message", () => {
  it("should be defined", () => {
    expect(MessageService).toBeDefined()
  })

  it("Calling find function should not throw an error", async () => {
    expect(
      async () =>
        await MessageService.send("chatUserId", "authUserId", "Hello World")
    ).not.toThrow()
  })
})
