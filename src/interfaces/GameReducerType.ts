import { Dispatch } from "react";

import { BingoDispathInterface } from "./BingoDispathInterface";
import { BingoStateInterface } from "./BingoStateInterface";

export type GameReducerType = [state: BingoStateInterface, dispatch: Dispatch<BingoDispathInterface>];
