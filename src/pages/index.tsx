import { useEffect } from "react";

import type { NextPage } from "next";
import Head from "next/head";

import { config } from "../configs";
import { useGameReducer } from "../hooks/useBingoReducer";
import { useSnackbar } from "../hooks/useSnackbar";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";

const Index: NextPage = () => {
  const [state, dispatch] = useGameReducer();
  const [openSnackbar] = useSnackbar();

  const { tableCards, showedCards, selectedCards, bingoCards } = state;
  const { bingoCardClassName, selectedCardClassName } = config;

  useEffect(() => {
    dispatch({ type: "initiate-game" });
  }, []);

  useEffect(() => {
    dispatch({ type: "check-bingo" });
  }, [tableCards, selectedCards]);

  const selectCard = (event: React.MouseEvent<HTMLElement>) => {
    const card = (event.target as HTMLElement).innerText;
    if (selectedCards.includes(card)) {
      openSnackbar({
        message: `Card is already selected: ${card}`,
        status: "info",
      });

      return;
    }
    if (!showedCards.includes(card)) {
      openSnackbar({
        message: `Selected Card is not in list of showed cards: ${card}`,
        status: "warning",
      });

      return;
    }

    dispatch({ type: "select-card", card });
  };

  return (
    <>
      <Head>
        <title>Bingo App</title>
      </Head>
      <div className="App">
        <Header state={state} dispatch={dispatch} openSnackbar={openSnackbar} />
        <div style={{ width: "100%" }}>
          <div style={{ width: "20%", display: "inline-block" }}>
            <SideBar showedCards={showedCards} />
          </div>
          <div style={{ width: "60%", display: "inline-block", verticalAlign: "top" }}>
            <table>
              <thead>
                <tr>
                  <th>B</th> <th>I</th> <th>N</th> <th>G</th> <th>O</th>
                </tr>
              </thead>
              <tbody>
                {tableCards.map((row) => (
                  <tr key={JSON.stringify(row)}>
                    {row.map((card) => (
                      <td
                        key={card}
                        onClick={selectCard}
                        className={
                          bingoCards.includes(card)
                            ? bingoCardClassName
                            : selectedCards.includes(card)
                            ? selectedCardClassName
                            : " "
                        }
                      >
                        {card}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
