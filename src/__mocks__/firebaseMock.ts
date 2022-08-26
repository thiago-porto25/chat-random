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
    return Promise.resolve()
  }),
  signInWithEmailAndPassword: jest.fn(() => {
    isSignIn = true
    authEmitter.emit("sign-in", user)
    return Promise.resolve({
      user: {
        displayName: "redirectResultTestDisplayName",
        email: "redirectTest@test.com",
        emailVerified: true,
        uid: "id123",
        sendEmailVerification: jest.fn(),
      },
    })
  }),
  createUserWithEmailAndPassword: jest.fn(() => Promise.resolve()),
  sendPasswordResetEmail: jest.fn(() => Promise.resolve()),
}

const mockFirestore = {
  getFirestore: jest.fn().mockReturnValue({}),
  connectFirestoreEmulator: jest.fn(),
  onSnapshot: jest.fn().mockReturnValue({}),
  doc: jest.fn().mockReturnValue({}),
  query: jest.fn().mockReturnValue({}),
  where: jest.fn().mockReturnValue({}),
  collection: jest.fn().mockReturnValue({}),
  getDocs: jest.fn().mockReturnValue([{ id: "123123" }]),
  limit: jest.fn().mockReturnValue({}),
  addDoc: jest.fn().mockReturnValue({}),
  updateDoc: jest.fn().mockReturnValue({}),
  arrayUnion: jest.fn().mockReturnValue({}),
  writeBatch: jest.fn().mockReturnValue({
    commit: () => {
      return
    },
  }),
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
