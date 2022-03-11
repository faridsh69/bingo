import { FC } from "react";
import { config } from "../configs";
import { showedCardsPropsInterface } from "../interfaces/showedCardsPropsInterface";

export const SideBar: FC<showedCardsPropsInterface> = (props) => {
  const { showedCards } = props;
  const { totalCards } = config;
  return (
    <>
      <h4>{`List of showed cards: ${showedCards.length}/${totalCards}`}</h4>
      <ul>
        {showedCards.map((card) => (
          <li key={card}>{card}</li>
        ))}
      </ul>
    </>
  );
};
