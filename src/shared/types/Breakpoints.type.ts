import { theme } from "@thiagoporto/minim-ui/dist/theme"

// TODO: with new Theme type coming with new lib update, this hook should be updated using types for the breakpoint useState and move this type to the types folder in shared
export type temporary__IBreakpoint = keyof typeof theme.base.breakpoints
