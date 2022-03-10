import { Alert, AlertColor, Snackbar, Stack, Typography } from "@mui/material";
import React, { createContext, FC, useMemo, useState } from "react";

interface SnackbarProps {
  open: boolean;
  message: string;
  status: AlertColor;
}
const defaultSnackbarProps: SnackbarProps = {
  open: false,
  message: "",
  status: "info",
};

export type SnackbarOption = Omit<SnackbarProps, "open">;

/**
 * The first element is a function for opening a new snackbar.
 *
 * @example [openSnackbar]
 */
type SnackbarContextType = readonly [(opt: SnackbarOption) => void];
// eslint-disable-next-line @typescript-eslint/no-empty-function
const CTX_INITIAL_VALUE = [() => {}] as const;

export const SnackbarContext =
  createContext<SnackbarContextType>(CTX_INITIAL_VALUE);

const SnackbarProvider: FC = ({ children }) => {
  const [snackbarProps, setSnackbarProps] =
    useState<SnackbarProps>(defaultSnackbarProps);
  const { open, message, status } = snackbarProps;

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarProps({ ...defaultSnackbarProps, open: false });
  };

  const openSnackbar = (opt: SnackbarOption) => {
    setSnackbarProps({ ...opt, open: true });
  };

  const contextValue: SnackbarContextType = useMemo(
    () => [openSnackbar] as const,
    []
  );

  return (
    <SnackbarContext.Provider value={contextValue}>
      {children}
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} onClose={handleClose} autoHideDuration={3000}>
          <Alert onClose={handleClose} severity={status} sx={{ width: "100%" }}>
            <Typography variant="h6">{message} </Typography>
          </Alert>
        </Snackbar>
      </Stack>
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
