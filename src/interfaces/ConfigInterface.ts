export default interface ConfigInterface {
  totalCards: number;
  dimention: number;
  freeCardIndex: number;
  freeCardValue: string;
  selectedCardClassName: string;
  bingoCardClassName: string;
  speeds: SelectOptions[];
  difficulties: SelectOptions[];
}

interface SelectOptions {
  value: number;
  label: string;
}
