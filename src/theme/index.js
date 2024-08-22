// ----------------------------------------------------------------------

/* Imports */
import { useMemo } from "react";
import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

// ----------------------------------------------------------------------

/* Local Imports */
import palette from "./palette";
import typography from "./typography";

/**
 * Theme Config is used to set themes to its children components
 *
 * @param children - nested components to set the theme
 * @returns provides theme to its children
 */
function ThemeConfig({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette: { ...palette.light, mode: "light" },
      typography,
    }),
    []
  );
  const theme = createTheme(themeOptions);
  /* Output */
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
export default ThemeConfig;
