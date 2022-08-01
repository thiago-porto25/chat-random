import { pxToNumber } from "@src/shared/helpers"

describe("Shared - Helper: pxToNumber", () => {
  it("should return a number, with correct argument", () => {
    expect(pxToNumber("12px")).toBe(12)
    expect(pxToNumber("12301920391023px")).toBe(12301920391023)
    expect(pxToNumber("1px")).toBe(1)
    expect(pxToNumber("0px")).toBe(0)
    expect(pxToNumber("2565535353px")).toBe(2565535353)
    expect(pxToNumber("12.1px")).toBe(12.1)
    expect(pxToNumber("25.25px")).toBe(25.25)
  })

  it("should throw an error, with invalid argument", () => {
    expect(() => pxToNumber("string")).toThrow()
    expect(() => pxToNumber("12rem")).toThrow()
    expect(() => pxToNumber("12em")).toThrow()
    expect(() => pxToNumber("12%")).toThrow()
  })
})
