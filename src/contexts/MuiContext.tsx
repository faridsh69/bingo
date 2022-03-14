import { FC } from "react";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "@styles/theme";

export const MuiProvider: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
