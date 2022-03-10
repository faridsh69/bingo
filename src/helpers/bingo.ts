import { config } from "../configs";
import { cards } from "../mocks/cards";

export function selectNewItem(
  items: string[],
  selectedItems: string[]
): string | null {
  const restOfItems = items.filter((item) => {
    return !selectedItems.includes(item);
  });

  if (!restOfItems) {
    console.log("All of cards are selected");
    return null;
  }
  let randomIndex = Math.floor(Math.random() * restOfItems.length);

  return restOfItems[randomIndex];
}

export function createTableCards(): string[][] {
  const { dimention, freeCardIndex, freeCardValue } = config;
  let selectedCards: string[] = [];
  let table: string[][] = [];
  let i: number = 0;
  let j: number = 0;

  for (i = 0; i < dimention; i++) {
    let row = [];
    for (j = 0; j < dimention; j++) {
      let card: string | null = freeCardValue;
      if (i !== freeCardIndex || j !== freeCardIndex) {
        card = selectNewItem(cards, selectedCards);
      }
      if (card === null) break;
      selectedCards.push(card);
      row.push(card);
    }
    table.push(row);
  }

  return table;
}

export const getBingoCards = (
  tableCards: string[],
  selectedCards: string[]
): string[] => {
  const { dimention } = config;
  let bingoCards: string[] = [];
  let bingo: boolean = true;
  let i: number = 0;
  let j: number = 0;
  let k: number = 0;
  for (i = 0; i < dimention; i++) {
    bingo = true;
    for (j = 0; j < dimention; j++) {
      if (!selectedCards.includes(tableCards[i][j])) {
        bingo = false;
        break;
      }
    }
    if (bingo) {
      for (let card of tableCards[i]) {
        bingoCards.push(card);
      }
    }

    bingo = true;
    for (j = 0; j < dimention; j++) {
      if (!selectedCards.includes(tableCards[j][i])) {
        bingo = false;
        break;
      }
    }
    if (bingo) {
      for (k = 0; k < dimention; k++) {
        bingoCards.push(tableCards[k][i]);
      }
    }
  }

  bingo = true;
  for (i = 0; i < dimention; i++) {
    if (!selectedCards.includes(tableCards[i][i])) {
      bingo = false;
      break;
    }
  }
  if (bingo) {
    for (k = 0; k < dimention; k++) {
      bingoCards.push(tableCards[k][k]);
    }
  }

  bingo = true;
  for (i = 0; i < dimention; i++) {
    if (!selectedCards.includes(tableCards[i][dimention - i - 1])) {
      bingo = false;
      break;
    }
  }
  if (bingo) {
    for (k = 0; k < dimention; k++) {
      bingoCards.push(tableCards[k][dimention - k - 1]);
    }
  }

  return bingoCards;
};
