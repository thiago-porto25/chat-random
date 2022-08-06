import { useEffect, useState } from "react"
import { useTheme } from "styled-components"

import { pxToNumber } from "@src/shared/helpers"
import { IBreakpoint } from "@src/shared/types"

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<IBreakpoint | null>(null)
  const theme = useTheme()

  useEffect(() => {
    const updateBreakpoint = (): void => {
      if (window.innerWidth < pxToNumber(theme.base.breakpoints.md)) {
        return setBreakpoint("sm")
      }
      if (window.innerWidth < pxToNumber(theme.base.breakpoints.lg)) {
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
