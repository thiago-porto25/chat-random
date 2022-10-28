import { onSnapshot, doc } from "firebase/firestore"

import { chatsCollection } from "@src/firebase"

import { CHAT } from "@src/shared/constants/routes"

import type { IListenChatPayload } from "@features/chat/types"

export function ListenChatEffect(payload: IListenChatPayload) {
  return () =>
    onSnapshot(doc(chatsCollection, payload.chatId), (doc) => {
      if (doc.data()?.participants.length === 2) payload.navigate(`/${CHAT}`)
    })
}
