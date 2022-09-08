import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Header } from "@src/features/chat/components"

export default {
  title: "Components/Chat/Header",
  component: Header,
} as ComponentMeta<typeof Header>

const onLeave = () => {
  return
}

export const Default: ComponentStory<typeof Header> = () => (
  <Header onLeave={onLeave} />
)
