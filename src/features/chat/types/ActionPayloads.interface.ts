import type { NextRouter } from "next/router"

export interface IFindOrCreateChatPayload {
  navigate: NextRouter["push"]
  authUserId: string
}

export interface IInitializeCreatedChatListenerPayload {
  navigate: NextRouter["push"]
}

export interface IFindOrCreateSuccessPayload {
  chatId: string
}

export interface IFindOrCreateCreatedPayload {
  createdChatId: string
}

export interface IInitializeCreatedChatListenerPayload {
  navigate: NextRouter["push"]
  chatId: string
}
