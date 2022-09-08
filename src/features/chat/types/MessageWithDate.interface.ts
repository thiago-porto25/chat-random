import { IMessageDocument } from "./MessageDocument.interface"

export interface IMessageWithDate extends Omit<IMessageDocument, "timestamp"> {
  timestamp: Date
}
