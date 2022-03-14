import { useContext } from "react";

import { SnackbarContext } from "@contexts/SnackbarContext";
import { SnackbarContextValueInterface } from "@interfaces/SnackbarContextValueInterface";

export const useSnackbar = (): SnackbarContextValueInterface => useContext(SnackbarContext);
