// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands"

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { attachCustomCommands } from "cypress-firebase"

// Configure cypress-firebase
const fbConfig = {
  apiKey: Cypress.env("FIREBASE_API_KEY"),
  authDomain: Cypress.env("FIREBASE_AUTH_DOMAIN"),
  projectId: Cypress.env("FIREBASE_PROJECT_ID"),
  storageBucket: Cypress.env("FIREBASE_STORAGE_BUCKET"),
  messagingSenderId: Cypress.env("FIREBASE_MESSAGING_SENDER_ID"),
  appId: Cypress.env("FIREBASE_APP_ID"),
}

firebase.initializeApp(fbConfig)

// Emulate Firestore and Auth
const firestoreEmulatorHost = Cypress.env("FIREBASE_FIRESTORE_EMULATOR_HOST")
if (firestoreEmulatorHost) {
  firebase.firestore().settings({
    host: firestoreEmulatorHost,
    ssl: false,
    experimentalForceLongPolling: true,
  })
}

const authEmulatorHost = Cypress.env("FIREBASE_AUTH_EMULATOR_HOST")
if (authEmulatorHost) {
  firebase.auth().useEmulator(`http://${authEmulatorHost}/`)
}

attachCustomCommands({ Cypress, cy, firebase })
