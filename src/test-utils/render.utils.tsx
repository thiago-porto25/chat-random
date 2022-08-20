import { Provider } from "react-redux"
import {
  render,
  renderHook,
  RenderHookOptions,
  RenderOptions,
} from "@testing-library/react"
import { GlobalAndCSSReset, MinimThemeProvider } from "@thiagoporto/minim-ui"

import { store } from "@src/store"

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <MinimThemeProvider>
        <GlobalAndCSSReset />
        {children}
      </MinimThemeProvider>
    </Provider>
  )
}

const renderWithProviders = (ui: JSX.Element, options?: RenderOptions) => {
  return render(ui, { wrapper: Wrapper, ...options })
}

const renderHookWithProviders = <Result, Props>(
  render: (initialProps: Props) => Result,
  options?: RenderHookOptions<Props>
) => {
  return renderHook(render, { wrapper: Wrapper, ...options })
}

export { renderWithProviders as render, renderHookWithProviders as renderHook }
