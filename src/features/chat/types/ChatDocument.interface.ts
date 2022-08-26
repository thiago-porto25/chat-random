export interface IChatDocument {
  participants: string[]
  messages: __TEST_MESSAGE[]
  full: boolean
}

interface __TEST_MESSAGE {
  a: string
}
