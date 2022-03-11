import { Dispatch, Reducer, useReducer } from 'react';

import { config } from '../configs';
import { cards } from '../mocks/cards';
import { createTableCards, selectNewItem, getBingoCards } from '../helpers/bingo';
import { BingoStateInterface } from '../interfaces/BingoStateInterface';
import { BingoDispathInterface } from '../interfaces/BingoDispathInterface';

export function useGameReducer(): [
  state: BingoStateInterface,
  dispatch: Dispatch<BingoDispathInterface>
] {
  const [state, dispatch] = useReducer<Reducer<BingoStateInterface, BingoDispathInterface>>(
    reducer,
    initialState()
  );

  return [state, dispatch];
}

const initialState = (): BingoStateInterface => {
  const { speeds, difficulties, freeCardValue } = config;
  return {
    status: 'initiated',
    speed: speeds[0].value,
    difficulty: difficulties[0].value,
    tableCards: createTableCards(),
    showedCards: [],
    selectedCards: [freeCardValue],
    bingoCards: []
  };
};

const reducer = (
  state: BingoStateInterface,
  action: BingoDispathInterface
): BingoStateInterface => {
  const { status, difficulty, tableCards, showedCards, selectedCards } = state;

  switch (action.type) {
    case 'initiate-game':
      return initialState();

    case 'start-game':
      return {
        ...state,
        status: 'started'
      };

    case 'restart-game':
      return initialState();

    case 'show-card':
      const card = selectNewItem(cards, showedCards);
      if (showedCards.length === difficulty || card === null || status === 'initiated') {
        clearInterval(action.interval as NodeJS.Timeout);
        return state;
      }

      return {
        ...state,
        showedCards: [card, ...showedCards]
      };

    case 'select-card':
      return {
        ...state,
        selectedCards: [...selectedCards, action.card as string]
      };

    case 'check-bingo':
      return {
        ...state,
        bingoCards: getBingoCards(tableCards, selectedCards)
      };

    case 'game-speed':
      return {
        ...state,
        speed: action.speed as number
      };

    case 'game-difficulty':
      return {
        ...state,
        difficulty: action.difficulty as number
      };

    default: {
      throw new Error(`Unhandled action type : ${action.type} - inside useGameReducer`);
    }
  }
};
