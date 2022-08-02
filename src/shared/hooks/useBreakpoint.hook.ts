import { useEffect, useState } from "react"
import { useTheme } from "styled-components"

import { pxToNumber } from "../helpers"
import { temporary__IBreakpoint } from "@src/shared/types"

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<temporary__IBreakpoint | null>(
    null
  )
  const theme = useTheme()

  useEffect(() => {
    const updateBreakpoint = (): void => {
      if (window.innerWidth <= pxToNumber(theme.base.breakpoints.sm)) {
        return setBreakpoint("sm")
      }
      if (
        window.innerWidth > pxToNumber(theme.base.breakpoints.sm) &&
        window.innerWidth < pxToNumber(theme.base.breakpoints.lg)
      ) {
        return setBreakpoint("md")
      }
      if (window.innerWidth >= pxToNumber(theme.base.breakpoints.lg)) {
        return setBreakpoint("lg")
      }

      return setBreakpoint(null)
    }

    updateBreakpoint()

    window.addEventListener("resize", updateBreakpoint)
    return () => window.removeEventListener("resize", updateBreakpoint)
  }, [theme])

  return breakpoint
}
