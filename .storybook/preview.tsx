import React from "react"
import * as NextImage from "next/image"
import { Provider } from "react-redux"
import { MinimThemeProvider, GlobalAndCSSReset } from "@thiagoporto/minim-ui"

import { store } from "../src/store"

import "@fontsource/anek-latin/latin.css"
import "@fontsource/lato/latin.css"
import "../src/styles/global.css"

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
})

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <MinimThemeProvider>
        <GlobalAndCSSReset />
        <Story />
      </MinimThemeProvider>
    </Provider>
  ),
]
