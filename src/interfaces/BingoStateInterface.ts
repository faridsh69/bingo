import { CardType } from "./CardType";

type BingoStatusType = "initiated" | "started";

export interface BingoStateInterface {
  status: BingoStatusType;
  speed: number;
  difficulty: number;
  tableCards: CardType[][];
  showedCards: CardType[];
  selectedCards: CardType[];
  bingoCards: CardType[];
}
