/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["@thiagoporto/minim-ui"])

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = withTM({
  ...nextConfig,
})
