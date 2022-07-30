import {} from "styled-components"
import { theme } from "@thiagoporto/minim-ui/dist/theme"

type ThemeType = typeof theme

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
