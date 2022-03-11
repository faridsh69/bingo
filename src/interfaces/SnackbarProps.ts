import { AlertColor } from '@mui/material';

export default interface SnackbarProps {
  open: boolean;
  message: string;
  status: AlertColor;
}
