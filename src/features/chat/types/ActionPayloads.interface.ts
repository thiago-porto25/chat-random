import type { NextRouter } from "next/router"

export interface IFindOrCreateChatPayload {
  navigate: NextRouter["push"]
  authUserId: string
}

export interface IFindOrCreateFoundPayload {
  chatId: string
}

export interface IFindOrCreateCreatedPayload {
  createdChatId: string
}

export interface IListenChatPayload {
  navigate: NextRouter["push"]
  chatId: string
}

export interface IDeleteChatPayload {
  chatId: string
}
