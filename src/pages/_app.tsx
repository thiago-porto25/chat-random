import type { AppProps } from "next/app"
import { GlobalAndCSSReset, MinimThemeProvider } from "@thiagoporto/minim-ui"

import "../firebase/config"
import "../styles/global.css"
import "@fontsource/anek-latin/latin.css"
import "@fontsource/lato/latin.css"

import { Head } from "@src/shared/components"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MinimThemeProvider>
      <Head />
      <GlobalAndCSSReset />
      <Component {...pageProps} />
    </MinimThemeProvider>
  )
}

export default MyApp
