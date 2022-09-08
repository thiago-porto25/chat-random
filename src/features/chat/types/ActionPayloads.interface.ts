import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit"
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
  finishAction: ActionCreatorWithoutPayload
}

export interface ISendMessagePayload {
  chatId: string
  authorId: string
  content: string
}
export interface IListenMessagesPayload {
  chatId: string
}

export interface ISendMessageToBotPayload {
  authorId: string
  content: string
}
