import { Dispatch } from "react";

import { BingoDispathInterface } from "./BingoDispathInterface";
import { BingoStateInterface } from "./BingoStateInterface";
import { SnackbarPropsInterface } from "./SnackbarPropsInterface";

export interface HeaderPropsInterface {
  state: BingoStateInterface;
  dispatch: Dispatch<BingoDispathInterface>;
  openSnackbar: (opt: SnackbarPropsInterface) => void;
}
