import { renderHook } from "@src/test-utils"
import { useBreakpoint } from "@src/shared/hooks"

describe("Shared - Hook: useBreakpoint", () => {
  it("should return breakpoint 'lg' when screen is bigger or equal than the 'lg' breakpoint", () => {
    window.innerWidth = 1366

    const { result } = renderHook(() => useBreakpoint())

    expect(result.current).toBe("lg")
  })

  it("should return breakpoint 'md' when screen is bigger than the 'sm' and smaller than the 'lg' breakpoint", () => {
    window.innerWidth = 700

    const { result } = renderHook(() => useBreakpoint())

    expect(result.current).toBe("md")
  })

  it("should return breakpoint 'sm' when screen is smaller or equal than the 'sm' breakpoint", () => {
    window.innerWidth = 320

    const { result } = renderHook(() => useBreakpoint())

    expect(result.current).toBe("sm")
  })
})
