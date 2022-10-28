import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { DefaultContent } from "@src/features/home/components"

export default {
  title: "Components/Home/DefaultContent",
  component: DefaultContent,
} as ComponentMeta<typeof DefaultContent>

export const Default: ComponentStory<typeof DefaultContent> = () => (
  <DefaultContent
    handleClick={() => {
      return
    }}
  />
)
