import { useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { appTheme } from "./common/theme";

function App() {
  const theme = useMemo(() => {
    return { ...appTheme };
  }, []);

  return <ThemeProvider theme={theme}></ThemeProvider>;
}

export default App;
