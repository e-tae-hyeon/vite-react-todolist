import { ThemeProvider } from "styled-components";
import { render, RenderOptions } from "@testing-library/react";
import { appTheme } from "common/theme";

const Wrapper = ({ children }: React.PropsWithChildren) => (
  <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
);

const renderWithStyledComponent = (
  children: React.ReactNode,
  options?: RenderOptions
) => render(children, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";
export { renderWithStyledComponent as render };
