export interface BingoStateInterface {
  status: string;
  speed: number;
  difficulty: number;
  tableCards: string[][];
  showedCards: string[];
  selectedCards: string[];
  bingoCards: string[];
}
