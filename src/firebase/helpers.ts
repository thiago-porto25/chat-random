import {
  collection,
  CollectionReference,
  DocumentData,
} from "firebase/firestore"

import { IChatDocument } from "@src/features/chat/types"

import { db } from "./config"

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>
}

export const chatsCollection = createCollection<IChatDocument>("chats")
