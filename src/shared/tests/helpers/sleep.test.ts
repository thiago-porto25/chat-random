import { sleep } from "@src/shared/helpers"

describe("Shared - Helper: sleep", () => {
  test("should sleep without errors", async () => {
    let timeSpent = 0
    const margin = 100

    const id = setInterval((): void => {
      timeSpent += 100
    }, 100)

    await sleep(3000)

    expect(timeSpent).toBe(3000 - margin)
    clearInterval(id)
  })
})
