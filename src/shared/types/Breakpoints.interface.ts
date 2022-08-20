import { ThemeType } from "@thiagoporto/minim-ui"

export type Breakpoint = keyof Omit<ThemeType["base"]["breakpoints"], "xl">
