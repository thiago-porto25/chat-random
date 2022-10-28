import { randPhrase, randEmoji } from "@ngneat/falso"

export const createBotMessage = (): string => {
  return randPhrase() + " " + randEmoji()
}
