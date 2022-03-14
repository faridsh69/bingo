import { CardType } from "@interfaces/CardType";
import { config } from "@configs/index";
import { cards } from "@mocks/cards";

export const createTableCards = (): CardType[][] => {
  const { dimention } = config;
  const selectedCards: CardType[] = [];
  const table: CardType[][] = [];
  let i = 0;
  let j = 0;
  let row: CardType[] = [];
  let card: CardType;

  for (i = 0; i < dimention; i++) {
    row = [];
    for (j = 0; j < dimention; j++) {
      card = selectTableCard(i, j, selectedCards);
      if (card === null) break;
      selectedCards.push(card);
      row.push(card);
    }
    table.push(row);
  }

  return table;
};

const selectTableCard = (i: number, j: number, selectedCards: CardType[]): CardType => {
  const { freeCardIndex, freeCardValue } = config;
  let card: CardType | null = freeCardValue;
  if (i !== freeCardIndex || j !== freeCardIndex) {
    card = selectNewItem(cards, selectedCards);
  }
  return card as CardType;
};

export const selectNewItem = (items: CardType[], selectedItems: CardType[]): CardType | null => {
  const restOfItems: CardType[] = items.filter(item => {
    return !selectedItems.includes(item);
  });
  if (!restOfItems) {
    return null;
  }
  const randomIndex: number = Math.floor(Math.random() * restOfItems.length);

  return restOfItems[randomIndex];
};

export const getBingoCards = (tableCards: CardType[][], selectedCards: CardType[]): CardType[] => {
  const { dimention } = config;
  let bingoCards: CardType[] = [];
  let i = 0;
  for (i = 0; i < dimention; i++) {
    bingoCards = checkBingoRows(i, selectedCards, tableCards, bingoCards);
    bingoCards = checkBingoColumns(i, selectedCards, tableCards, bingoCards);
  }
  bingoCards = checkBingoDiagonalDecreasing(selectedCards, tableCards, bingoCards);
  bingoCards = checkBingoDiagonalIncreasing(selectedCards, tableCards, bingoCards);

  return bingoCards;
};

const checkBingoRows = (
  i: number,
  selectedCards: CardType[],
  tableCards: CardType[][],
  bingoCards: CardType[]
): CardType[] => {
  const { dimention } = config;
  let bingo = true;
  let j = 0;
  let k = 0;

  for (j; j < dimention; j++) {
    if (!selectedCards.includes(tableCards[i][j])) {
      bingo = false;
      break;
    }
  }

  if (bingo) {
    for (k; k < dimention; k++) {
      bingoCards.push(tableCards[i][k]);
    }
  }

  return bingoCards;
};

const checkBingoColumns = (
  i: number,
  selectedCards: CardType[],
  tableCards: CardType[][],
  bingoCards: CardType[]
): CardType[] => {
  const { dimention } = config;
  let bingo = true;
  let j = 0;
  let k = 0;

  for (j; j < dimention; j++) {
    if (!selectedCards.includes(tableCards[j][i])) {
      bingo = false;
      break;
    }
  }

  if (bingo) {
    for (k; k < dimention; k++) {
      bingoCards.push(tableCards[k][i]);
    }
  }

  return bingoCards;
};

const checkBingoDiagonalDecreasing = (
  selectedCards: CardType[],
  tableCards: CardType[][],
  bingoCards: CardType[]
): CardType[] => {
  const { dimention } = config;
  let bingo = true;
  let i = 0;
  let k = 0;
  for (i; i < dimention; i++) {
    if (!selectedCards.includes(tableCards[i][i])) {
      bingo = false;
      break;
    }
  }
  if (bingo) {
    for (k; k < dimention; k++) {
      bingoCards.push(tableCards[k][k]);
    }
  }

  return bingoCards;
};

const checkBingoDiagonalIncreasing = (
  selectedCards: CardType[],
  tableCards: CardType[][],
  bingoCards: CardType[]
): CardType[] => {
  const { dimention } = config;
  let bingo = true;
  let i = 0;
  let k = 0;
  for (i; i < dimention; i++) {
    if (!selectedCards.includes(tableCards[i][dimention - i - 1])) {
      bingo = false;
      break;
    }
  }
  if (bingo) {
    for (k; k < dimention; k++) {
      bingoCards.push(tableCards[k][dimention - k - 1]);
    }
  }

  return bingoCards;
};
