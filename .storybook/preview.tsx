import React from "react"
import { MinimThemeProvider, GlobalAndCSSReset } from "@thiagoporto/minim-ui"
import "@fontsource/anek-latin"
import "@fontsource/lato"

export const decorators = [
  (Story) => (
    <MinimThemeProvider>
      <GlobalAndCSSReset />
      <Story />
    </MinimThemeProvider>
  ),
]
