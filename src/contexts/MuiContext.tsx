import { FC } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, GlobalStyles } from "@mui/material";

import { themeGlobalStyles, muiTheme } from "@styles/theme";

export const MuiProvider: FC = ({ children }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <GlobalStyles styles={themeGlobalStyles} />
      {children}
    </ThemeProvider>
  );
};
