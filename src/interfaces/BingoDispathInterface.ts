export interface BingoDispathInterface {
  type:
    | 'prepare-game'
    | 'start-game'
    | 'restart-game'
    | 'show-card'
    | 'select-card'
    | 'check-bingo'
    | 'game-speed'
    | 'game-difficulty';
  interval?: NodeJS.Timeout;
  card?: string;
  difficulty?: number;
  speed?: number;
}
