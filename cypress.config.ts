/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from "cypress"
import admin from "firebase-admin"
import webpack from "@cypress/webpack-preprocessor"
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor"
import { plugin as cypressFirebasePlugin } from "cypress-firebase"
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse")

import env from "./cypress.env.json"

const cypressEnv = JSON.parse(JSON.stringify(env))

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config)
  // Pre-configure Node's env for Firebase Emulator
  process.env["FIRESTORE_EMULATOR_HOST"] =
    cypressEnv.FIREBASE_FIRESTORE_EMULATOR_HOST
  process.env["FIREBASE_AUTH_EMULATOR_HOST"] =
    cypressEnv.FIREBASE_AUTH_EMULATOR_HOST

  cypressFirebasePlugin(on, config, admin, {
    projectId: "chat-random-dev",
    credential: admin.credential.cert(require("./firebase-credentials.json")),
  })

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
