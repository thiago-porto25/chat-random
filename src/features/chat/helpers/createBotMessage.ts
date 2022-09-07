import { faker } from "@faker-js/faker"

export const createBotMessage = (): string => {
  return faker.hacker.phrase()
}
