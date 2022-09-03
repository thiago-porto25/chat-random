import { updateDoc, Timestamp, doc, arrayUnion } from "firebase/firestore"

import { chatsCollection } from "@src/firebase"

export class MessageService {
  public static async send(
    chatId: string,
    authorId: string,
    content: string
  ): Promise<void> {
    const newMessage = {
      authorId,
      content,
      timestamp: Timestamp.now(),
    }

    await updateDoc(doc(chatsCollection, chatId), {
      messages: arrayUnion(newMessage),
    })
  }
}
