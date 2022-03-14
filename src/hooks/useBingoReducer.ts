import { Reducer, useReducer } from "react";

import { config } from "@configs/index";
import { cards } from "@mocks/cards";
import { createTableCards, selectNewItem, getBingoCards } from "@helpers/bingo";
import { BingoStateInterface } from "@interfaces/BingoStateInterface";
import { BingoDispathInterface } from "@interfaces/BingoDispathInterface";
import { GameReducerType } from "@interfaces/GameReducerType";
import { CardType } from "@interfaces/CardType";

export function useGameReducer(): GameReducerType {
  const [state, dispatch] = useReducer<Reducer<BingoStateInterface, BingoDispathInterface>>(reducer, defaultState());

  return [state, dispatch];
}

const defaultState = (): BingoStateInterface => {
  const { speeds, difficulties, freeCardValue } = config;
  return {
    status: "initiated",
    speed: speeds[0].value,
    difficulty: difficulties[0].value,
    tableCards: [],
    showedCards: [],
    selectedCards: [freeCardValue],
    bingoCards: [],
  };
};

const preparedState = (): BingoStateInterface => {
  const initialState: BingoStateInterface = defaultState();
  initialState.tableCards = createTableCards();

  return initialState;
};

const reducer = (state: BingoStateInterface, action: BingoDispathInterface): BingoStateInterface => {
  const { status, difficulty, tableCards, showedCards, selectedCards } = state;

  switch (action.type) {
    case "prepare-game":
      return preparedState();

    case "start-game":
      return {
        ...state,
        status: "started",
      };

    case "restart-game":
      return preparedState();

    case "show-card":
      const card = selectNewItem(cards, showedCards);
      if (showedCards.length === difficulty || card === null || status === "initiated") {
        clearInterval(action.interval as NodeJS.Timeout);
        return state;
      }

      return {
        ...state,
        showedCards: [card, ...showedCards],
      };

    case "select-card":
      return {
        ...state,
        selectedCards: [...selectedCards, action.card as CardType],
      };

    case "check-bingo":
      return {
        ...state,
        bingoCards: getBingoCards(tableCards, selectedCards),
      };

    case "game-speed":
      return {
        ...state,
        speed: action.speed as number,
      };

    case "game-difficulty":
      return {
        ...state,
        difficulty: action.difficulty as number,
      };

    default: {
      throw new Error(`Unhandled action type : ${action.type} - inside useGameReducer`);
    }
  }
};
