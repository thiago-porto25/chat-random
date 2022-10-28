import React from "react"
import { Timestamp } from "firebase/firestore"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Body } from "@src/features/chat/components"

export default {
  title: "Components/Chat/Body",
  component: Body,
} as ComponentMeta<typeof Body>

export const Default: ComponentStory<typeof Body> = () => (
  <Body
    messages={[
      {
        authorId: "me",
        content: "Hello World",
        timestamp: Timestamp.now(),
      },
    ]}
  />
)
