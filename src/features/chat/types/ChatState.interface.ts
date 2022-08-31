import { Status } from "@src/shared/types"

export interface IChatState {
  findOrCreateChatStatus: Status | "created"
  chatId: string | null
  isChattingWithBot: boolean
}
