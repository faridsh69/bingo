import { Alert, Snackbar, Stack, Typography } from '@mui/material';
import React, { createContext, FC, useMemo, useState } from 'react';
import { SnackbarContextType } from '../interfaces/SnackbarContextType';
import { SnackbarOption } from '../interfaces/SnackbarOption';
import SnackbarProps from '../interfaces/SnackbarProps';

const defaultSnackbarProps: SnackbarProps = {
  open: false,
  message: '',
  status: 'info'
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const CTX_INITIAL_VALUE = [() => {}] as const;

export const SnackbarContext = createContext<SnackbarContextType>(CTX_INITIAL_VALUE);

export const SnackbarProvider: FC = ({ children }) => {
  const [snackbarProps, setSnackbarProps] = useState<SnackbarProps>(defaultSnackbarProps);
  const { open, message, status } = snackbarProps;

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarProps({ ...defaultSnackbarProps, open: false });
  };

  const openSnackbar = (opt: SnackbarOption) => {
    setSnackbarProps({ ...opt, open: true });
  };

  const contextValue: SnackbarContextType = useMemo(() => [openSnackbar] as const, []);

  return (
    <SnackbarContext.Provider value={contextValue}>
      {children}
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={open} onClose={handleClose} autoHideDuration={3000}>
          <Alert onClose={handleClose} severity={status} sx={{ width: '100%' }}>
            <Typography>{message} </Typography>
          </Alert>
        </Snackbar>
      </Stack>
    </SnackbarContext.Provider>
  );
};
