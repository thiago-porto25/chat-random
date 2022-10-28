import { Dispatch, SetStateAction } from "react"

export interface IFooter {
  onSend: () => void
  content: string
  setContent: Dispatch<SetStateAction<string>>
}
