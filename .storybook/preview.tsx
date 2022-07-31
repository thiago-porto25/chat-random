import React from "react"
import * as NextImage from "next/image"
import { MinimThemeProvider, GlobalAndCSSReset } from "@thiagoporto/minim-ui"

import "@fontsource/anek-latin/latin.css"
import "@fontsource/lato/latin.css"
import "../src/styles/global.css"

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
})

export const decorators = [
  (Story) => (
    <MinimThemeProvider>
      <GlobalAndCSSReset />
      <Story />
    </MinimThemeProvider>
  ),
]
