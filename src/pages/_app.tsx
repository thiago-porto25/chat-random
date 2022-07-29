import type { AppProps } from "next/app"
import { MinimThemeProvider } from "@thiagoporto/minim-ui"
import "../firebase/config"
import "@fontsource/anek-latin"
import "@fontsource/lato"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MinimThemeProvider>
      <Component {...pageProps} />
    </MinimThemeProvider>
  )
}

export default MyApp
