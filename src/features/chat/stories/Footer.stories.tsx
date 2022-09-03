import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Footer } from "@src/features/chat/components"

export default {
  title: "Components/Chat/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>

const onSend = () => {
  return
}

const setContent = () => {
  return
}

export const Default: ComponentStory<typeof Footer> = () => (
  <Footer content="value" setContent={setContent} onSend={onSend} />
)
