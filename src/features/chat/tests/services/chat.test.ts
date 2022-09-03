import { ChatService } from "@features/chat/services"

describe("Feature: Chat - Service: Chat", () => {
  it("should be defined", () => {
    expect(ChatService).toBeDefined()
  })

  it("Calling find function should not throw an error", async () => {
    expect(async () => await ChatService.find("authUserId")).not.toThrow()
  })

  it("Calling create function should not throw an error", async () => {
    expect(async () => await ChatService.create("authUserId")).not.toThrow()
  })

  it("Calling the deleteAll function should not throw an error", async () => {
    expect(async () => await ChatService.deleteAll("authUserId")).not.toThrow()
  })

  it("Calling the delete function should not throw an error", async () => {
    expect(async () => await ChatService.delete("chatUserId")).not.toThrow()
  })
})
