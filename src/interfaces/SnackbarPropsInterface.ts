import { AlertColor } from "@mui/material";

export interface SnackbarPropsInterface {
  open?: boolean;
  message: string;
  severity: AlertColor;
}
