import EventEmitter from "eventemitter3"

const authEmitter = new EventEmitter()
let isSignIn = true
const user = {
  displayName: "test name",
  email: "redirectTest@test.com",
  emailVerified: true,
  uid: "id123",
}

const mockAuth = {
  onAuthStateChanged: jest.fn((_, fn) => {
    // sign user on start
    fn(user)
    // sign-out user on start
    authEmitter.on("sign-out", fn, undefined)
    authEmitter.on("sign-in", fn, user)
  }),
  getAuth: jest.fn().mockReturnValue({
    currentUser: isSignIn
      ? {
          displayName: "redirectResultTestDisplayName",
          email: "redirectTest@test.com",
          emailVerified: true,
          uid: "id123",
          sendEmailVerification: jest.fn(),
        }
      : null,
  }),
  connectAuthEmulator: jest.fn(),
  signOut: jest.fn(() => {
    isSignIn = false
    authEmitter.emit("sign-out")
    return Promise.resolve({ message: "logged out" })
  }),
  signInWithEmailAndPassword: jest.fn(() => {
    isSignIn = true
    authEmitter.emit("sign-in", user)
    return Promise.resolve({ message: "logged in" })
  }),
  createUserWithEmailAndPassword: jest.fn(() =>
    Promise.resolve({ message: "registered" })
  ),
  sendPasswordResetEmail: jest.fn(() =>
    Promise.resolve({ message: "email sent" })
  ),
}

const mockFirestore = {
  getFirestore: jest.fn().mockReturnValue({}),
  connectFirestoreEmulator: jest.fn(),
}

const mockFirebase = {
  initializeApp: jest.fn().mockReturnValue({
    name: "testChat",
    options: {},
    automaticDataCollectionEnabled: true,
  }),
}

jest.mock("firebase/app", () => mockFirebase)
jest.mock("firebase/auth", () => mockAuth)
jest.mock("firebase/firestore", () => mockFirestore)
