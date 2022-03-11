import { Dispatch } from 'react';
import { BingoDispathInterface } from './BingoDispathInterface';
import { BingoStateInterface } from './BingoStateInterface';
import { SnackbarOption } from './SnackbarOption';

export interface HeaderPropsInterface {
  state: BingoStateInterface;
  dispatch: Dispatch<BingoDispathInterface>;
  openSnackbar: (opt: SnackbarOption) => void;
}
