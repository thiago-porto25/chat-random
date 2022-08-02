import NextHead from "next/head"

export const Head: React.FC = () => {
  return (
    <NextHead>
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
      <link rel="manifest" href="/manifest.webmanifest" />
    </NextHead>
  )
}
