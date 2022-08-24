import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { NoChatContent } from "@src/features/home/components"

export default {
  title: "Components/Home/NoChatContent",
  component: NoChatContent,
} as ComponentMeta<typeof NoChatContent>

export const Default: ComponentStory<typeof NoChatContent> = () => (
  <NoChatContent
    handleClick={() => {
      return
    }}
  />
)
