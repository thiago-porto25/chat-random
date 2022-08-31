import {
  query,
  where,
  getDocs,
  limit,
  addDoc,
  updateDoc,
  doc,
  arrayUnion,
  writeBatch,
  deleteDoc,
} from "firebase/firestore"

import { chatsCollection, db } from "@src/firebase"

export class ChatService {
  public static async find(authUserId: string): Promise<string> {
    let docId = ""

    await this.deleteAll(authUserId)

    const q = query(chatsCollection, where("full", "==", false), limit(1))

    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((docSnap) => {
      docId = docSnap.id
    })

    await updateDoc(doc(chatsCollection, docId), {
      full: true,
      participants: arrayUnion(authUserId),
    })

    return docId
  }

  public static async create(authUserId: string): Promise<string> {
    const doc = await addDoc(chatsCollection, {
      participants: [authUserId],
      messages: [],
      full: false,
    })

    return doc.id
  }

  public static async deleteAll(authUserId: string): Promise<void> {
    const q = query(
      chatsCollection,
      where("participants", "array-contains", authUserId)
    )
    const querySnapshot = await getDocs(q)

    if (querySnapshot.docs.length < 1) return

    const batch = writeBatch(db)
    querySnapshot.forEach((docSnap) => {
      batch.delete(docSnap.ref)
    })

    await batch.commit()
  }

  public static async delete(chatId: string): Promise<void> {
    await deleteDoc(doc(chatsCollection, chatId))
  }
}
