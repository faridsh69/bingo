import { CardType } from "./CardType";

type BingoDispathTypeType =
  | "prepare-game"
  | "start-game"
  | "restart-game"
  | "show-card"
  | "select-card"
  | "check-bingo"
  | "game-speed"
  | "game-difficulty";

export interface BingoDispathInterface {
  type: BingoDispathTypeType;
  interval?: NodeJS.Timeout;
  card?: CardType;
  difficulty?: number;
  speed?: number;
}
