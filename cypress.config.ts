/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from "cypress"
import webpack from "@cypress/webpack-preprocessor"
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor"
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse")

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config)

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: "ts-loader",
                },
              ],
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  )

  on("before:browser:launch", (browser, launchOptions) => {
    prepareAudit(launchOptions)
  })

  on("task", {
    lighthouse: lighthouse(),
  })

  return config
}

export default defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: "http://localhost:3000",
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
})
