import { useContext } from "react";

import { SnackbarContext } from "../contexts/SnackbarContext";
import { SnackbarContextType } from "../interfaces/SnackbarContextType";

export const useSnackbar = (): SnackbarContextType =>
  useContext(SnackbarContext);
