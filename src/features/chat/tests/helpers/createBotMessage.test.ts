import { createBotMessage } from "@features/chat/helpers"

describe("Feature: Chat - Helper: createBotMessage", () => {
  it("should return a random message", () => {
    expect(createBotMessage()).toBeTruthy()
    expect(createBotMessage()).toBeTruthy()
    expect(createBotMessage()).toBeTruthy()
    expect(createBotMessage()).toBeTruthy()
  })
})
