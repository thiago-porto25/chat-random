import { onSnapshot, doc } from "firebase/firestore"

import { AppDispatch } from "@src/store"
import { chatsCollection } from "@src/firebase"

import type { IListenMessagesPayload } from "@features/chat/types"
import {
  resetChatStateAction,
  updateChatAction,
} from "@features/chat/store/chat.slice"

export function ListenMessagesEffect(payload: IListenMessagesPayload) {
  return (dispatch: AppDispatch) =>
    onSnapshot(doc(chatsCollection, payload.chatId), (doc) => {
      const docData = doc.data()

      if (docData) {
        dispatch(updateChatAction(docData))
      }

      if (!doc.exists()) {
        dispatch(resetChatStateAction())
      }
    })
}
