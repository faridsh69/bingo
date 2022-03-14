import { Alert, Snackbar, Stack, Typography } from "@mui/material";
import React, { createContext, FC, useCallback, useState } from "react";
import { SnackbarContextValueInterface } from "@interfaces/SnackbarContextValueInterface";
import { SnackbarPropsInterface } from "@interfaces/SnackbarPropsInterface";

const defaultSnackbarProps: SnackbarPropsInterface = {
  open: false,
  message: "",
  severity: "info",
};

const defaultSnackbarContextValue: SnackbarContextValueInterface = (props: SnackbarPropsInterface) => {
  void props;
};
export const SnackbarContext = createContext<SnackbarContextValueInterface>(defaultSnackbarContextValue);

export const SnackbarProvider: FC = ({ children }) => {
  const [snackbarProps, setSnackbarProps] = useState<SnackbarPropsInterface>(defaultSnackbarProps);
  const { open, message, severity } = snackbarProps;

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarProps({ ...defaultSnackbarProps, open: false });
  };

  const openSnackbar = useCallback((props: SnackbarPropsInterface) => {
    setSnackbarProps({ ...props, open: true });
  }, []);

  const contextValue: SnackbarContextValueInterface = openSnackbar;

  return (
    <SnackbarContext.Provider value={contextValue}>
      {children}
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} onClose={handleClose} autoHideDuration={3000}>
          <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
            <Typography>{message} </Typography>
          </Alert>
        </Snackbar>
      </Stack>
    </SnackbarContext.Provider>
  );
};
