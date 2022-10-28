import { Status } from "@src/shared/types"
import { IChatDocument } from "./ChatDocument.interface"

export interface IChatState {
  chatData: IChatDocument | null
  chatId: string | null
  findOrCreateChatStatus: Status | "created"
  isChattingWithBot: boolean
}
