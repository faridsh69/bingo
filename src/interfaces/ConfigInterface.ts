import { CardType } from "./CardType";

export default interface ConfigInterface {
  totalCards: number;
  dimention: number;
  freeCardIndex: number;
  freeCardValue: CardType;
  selectedCardClassName: string;
  bingoCardClassName: string;
  speeds: SelectOptions[];
  difficulties: SelectOptions[];
}

interface SelectOptions {
  value: number;
  label: string;
}
