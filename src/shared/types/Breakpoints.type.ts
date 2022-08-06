import { ThemeType } from "@thiagoporto/minim-ui"

export type IBreakpoint = keyof Omit<ThemeType["base"]["breakpoints"], "xl">
