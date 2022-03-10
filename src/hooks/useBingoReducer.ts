import { Dispatch, useReducer } from "react";

import { config } from "../configs";
import { cards } from "../mocks/cards";
import {
  createTableCards,
  selectNewItem,
  getBingoCards,
} from "../helpers/bingo";

export function useGameReducer(): [
  state: BingoStateInterface,
  dispatch: Dispatch<BingoDispathInterface>
] {
  const [state, dispatch] = useReducer(reducer, initialState());

  return [state, dispatch];
}

export interface BingoStateInterface {
  status: string;
  speed: number;
  difficulty: number;
  tableCards: string[][];
  showedCards: string[];
  selectedCards: string[];
  bingoCards: string[];
}
export interface BingoDispathInterface {
  type:
    | "initiate-game"
    | "start-game"
    | "restart-game"
    | "show-card"
    | "select-card"
    | "check-bingo"
    | "game-speed"
    | "game-difficulty";
  interval?: NODEJS.Timeout;
  card?: string;
  difficulty?: number;
  speed?: number;
}

const initialState = (): BingoStateInterface => {
  const { speeds, difficulties, freeCardValue } = config;
  return {
    status: "initiated",
    speed: speeds[0].value,
    difficulty: difficulties[0].value,
    tableCards: createTableCards(),
    showedCards: [],
    selectedCards: [freeCardValue],
    bingoCards: [],
  };
};

const reducer = (
  state: BingoStateInterface,
  action: BingoDispathInterface
): BingoStateInterface => {
  const {
    status,
    difficulty,
    tableCards,
    showedCards,
    selectedCards,
    bingoCards,
  } = state;

  switch (action.type) {
    case "initiate-game":
      return initialState();

    case "start-game":
      return {
        ...state,
        status: "started",
      };

    case "restart-game":
      return initialState();

    case "show-card":
      let card = selectNewItem(cards, showedCards);
      if (
        showedCards.length === difficulty ||
        card === null ||
        status === "initiated"
      ) {
        clearInterval(action.interval);
        return state;
      }

      return {
        ...state,
        showedCards: [card, ...showedCards],
      };

    case "select-card":
      return {
        ...state,
        selectedCards: [...selectedCards, action.card],
      };

    case "check-bingo":
      let newBingoCards = getBingoCards(tableCards, selectedCards);
      if (newBingoCards.length !== bingoCards.length) {
        console.log("new bingo");
      }
      return {
        ...state,
        bingoCards: newBingoCards,
      };

    case "game-speed":
      return {
        ...state,
        speed: action.speed,
      };

    case "game-difficulty":
      return {
        ...state,
        difficulty: action.difficulty,
      };

    default: {
      throw new Error(
        `Unhandled action type : ${action.type} - inside useGameReducer`
      );
    }
  }
};
