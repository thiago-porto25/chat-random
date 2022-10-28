/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["@thiagoporto/minim-ui"])
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: true,
// })

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}

// module.exports = withBundleAnalyzer(
//   withTM({
//     ...nextConfig,
//   })
// )
module.exports = withTM({
  ...nextConfig,
})
