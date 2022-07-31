import { render, RenderOptions } from "@testing-library/react"
import { GlobalAndCSSReset, MinimThemeProvider } from "@thiagoporto/minim-ui"

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <MinimThemeProvider>
      <GlobalAndCSSReset />
      {children}
    </MinimThemeProvider>
  )
}

const renderWithProviders = (ui: JSX.Element, options?: RenderOptions) => {
  return render(ui, { wrapper: Wrapper, ...options })
}

export { renderWithProviders as render }
