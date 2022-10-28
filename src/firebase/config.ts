import { FirebaseOptions, initializeApp } from "firebase/app"
import { getAuth, connectAuthEmulator } from "firebase/auth"
import {
  connectFirestoreEmulator,
  initializeFirestore,
} from "firebase/firestore"

const isDevelopment = process.env.NODE_ENV === "development"

const config: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const app = initializeApp(config)
const auth = getAuth(app)
const db = initializeFirestore(
  app,
  isDevelopment ? { experimentalForceLongPolling: true } : {}
)

if (isDevelopment) {
  connectFirestoreEmulator(db, "localhost", 9098)
  connectAuthEmulator(auth, "http://localhost:9099")
}

export { db, auth }
