import { IMessageDocument } from "./MessageDocument.interface"

export interface IChatDocument {
  participants: string[]
  messages: IMessageDocument[]
  full: boolean
}
