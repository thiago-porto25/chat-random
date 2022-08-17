import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Spinner } from "@src/shared/components"

export default {
  title: "Components/Auth/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>

export const Default: ComponentStory<typeof Spinner> = () => <Spinner />
