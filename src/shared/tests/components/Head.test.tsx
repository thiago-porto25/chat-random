import { render } from "@src/test-utils"
import { Head } from "@src/shared/components"

describe("Shared - Component: Head", () => {
  it("should render without throwing errors", () => {
    render(<Head />)
    expect(true).toBe(true)
  })
})
