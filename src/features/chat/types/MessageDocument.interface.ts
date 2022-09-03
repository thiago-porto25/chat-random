import { Timestamp } from "firebase/firestore"

export interface IMessageDocument {
  authorId: string
  content: string
  timestamp: Timestamp
}
