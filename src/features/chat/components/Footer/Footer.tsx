import {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  useEffect,
  useState,
  MouseEvent,
} from "react"
import { BaseEmoji, Picker } from "emoji-mart"
import {
  ChatInput,
  ClickableIcon,
  EmojiIcon,
  SendIcon,
  Spacer,
} from "@thiagoporto/minim-ui"

import { testId } from "@src/test-utils"

import { IFooter } from "@features/chat/types"

import { ChatInputContainer, Container } from "./styles"

import "emoji-mart/css/emoji-mart.css"

export const Footer: React.FC<IFooter> = ({ onSend, content, setContent }) => {
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSend()
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  const handleEnterPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") onSend()
  }

  const handleSelectEmoji = (e: BaseEmoji) => {
    setContent((prev) => prev + e.native)
  }

  const handleOpenEmoji = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.stopPropagation()
    setIsEmojiPickerOpen((prev) => !prev)
  }

  useEffect(() => {
    function close() {
      if (isEmojiPickerOpen) setIsEmojiPickerOpen(false)
    }

    window.addEventListener("click", close)

    return () => window.removeEventListener("click", close)
  }, [isEmojiPickerOpen])

  return (
    <Container onSubmit={handleSubmit}>
      {/**
       Lint rule disabled because the onClick was used only to stop click propagation and is not intended for user interaction
       */
      /* eslint-disable jsx-a11y/click-events-have-key-events */
      /* eslint-disable-next-line jsx-a11y/no-static-element-interactions*/}
      <div onClick={(e) => e.stopPropagation()}>
        <ClickableIcon type="button" onClick={handleOpenEmoji}>
          <EmojiIcon />
        </ClickableIcon>
        {isEmojiPickerOpen && (
          <Picker
            onSelect={handleSelectEmoji}
            style={{
              position: "absolute",
              top: "calc(100% - 500px)",
              zIndex: "10",
            }}
          />
        )}
      </div>
      <Spacer variant="inline" size={{ sm: "nn", md: "nn", lg: "xxs" }} />
      <ChatInputContainer>
        <ChatInput
          value={content}
          onChange={handleChange}
          placeholder="Message..."
          onKeyUp={handleEnterPress}
          data-testid={testId.chat}
        />
      </ChatInputContainer>
      <Spacer variant="inline" size={{ sm: "nn", md: "nn", lg: "xxxs" }} />
      <ClickableIcon
        type="submit"
        disabled={content.trim().length < 1}
        data-testid={testId.chatSubmit}
      >
        <SendIcon />
      </ClickableIcon>
    </Container>
  )
}
