import { useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { appTheme } from "./common/theme";
import HomePage from "./routes/HomePage";

function App() {
  const theme = useMemo(() => {
    return { ...appTheme };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
