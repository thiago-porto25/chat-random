import type { AppProps } from "next/app"
import Head from "next/head"
import { Provider } from "react-redux"
import { GlobalAndCSSReset, MinimThemeProvider } from "@thiagoporto/minim-ui"

import "../firebase/config"
import "../styles/global.css"
import "@fontsource/anek-latin/latin.css"
import "@fontsource/lato/latin.css"

import { store } from "@src/store"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MinimThemeProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>Chat Random</title>
        <meta
          name="description"
          content="Join Chat Random and chat anonymously with anyone worldwide."
        />
        <meta name="theme-color" content="#fff" />
        <meta
          name="keywords"
          content="Chat, Chat Random, Messaging App, Message, Chatting, Secure, Anonymous"
        />
        <meta name="author" content="Thiago Porto" />

        {/* OG tags */}
        <meta property="og:title" content="Chat Random" />
        <meta
          property="og:description"
          content="Join Chat Random and chat anonymously with anyone worldwide."
        />
        <meta property="og:image" name="thumb" content="/og.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Chat Random" />

        <meta property="twitter:card" content="summary_large_image" />

        {/* FAVICONS */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* MISC */}
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <GlobalAndCSSReset />

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </MinimThemeProvider>
  )
}

export default MyApp
