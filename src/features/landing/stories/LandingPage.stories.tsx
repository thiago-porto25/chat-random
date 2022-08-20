import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import Landing from "@src/pages/index"

export default {
  title: "Pages/Landing",
  component: Landing,
} as ComponentMeta<typeof Landing>

export const Default: ComponentStory<typeof Landing> = () => <Landing />
