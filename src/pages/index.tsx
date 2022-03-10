import { useEffect } from "react";

import type { NextPage } from "next";
import Head from "next/head";

import { config } from "../configs";
import { useGameReducer } from "../hooks/useBingoReducer";

const Index = () => {
  const [state, dispatch] = useGameReducer();
  const { status, speed, tableCards, showedCards, selectedCards, bingoCards } =
    state;
  const { speeds, difficulties, bingoCardClassName, selectedCardClassName } =
    config;

  useEffect(() => {
    dispatch({ type: "initiate-game" });
  }, []);

  useEffect(() => {
    dispatch({ type: "check-bingo" });
  }, [tableCards, selectedCards]);

  const start = () => {
    dispatch({ type: "start-game" });
    const interval = setInterval(() => {
      dispatch({ type: "show-card", interval });
    }, speed);
  };

  const restart = () => {
    if (window.confirm("Are you really want to restart the game?")) {
      dispatch({ type: "restart-game" });
    }
  };

  const selectCard = (event) => {
    const card = event.target.textContent;
    if (selectedCards.includes(card)) {
      console.log(card + " is already selected");
      // toast a message card is already selected
      return;
    }
    if (!showedCards.includes(card)) {
      console.log(card + " is not showed yet...");
      // toast a message dont cheat
      return;
    }

    dispatch({ type: "select-card", card });
  };

  const changeSpeed = (event) => {
    const speed = event.target.value;
    dispatch({ type: "game-speed", speed: parseInt(speed) });
  };

  const changeDifficulty = (event) => {
    const difficulty = event.target.value;
    dispatch({ type: "game-difficulty", difficulty: parseInt(difficulty) });
  };

  return (
    <>
      <Head>
        <title>Bingo App</title>
      </Head>
      <div className="App">
        {status === "initiated" ? (
          <>
            <button onClick={start}>START</button>
            <br />
            <br />
            <select onChange={changeSpeed}>
              {speeds.map((speed) => (
                <option key={speed.value} value={speed.value}>
                  {speed.label}
                </option>
              ))}
            </select>
            <br />
            <br />
            <select onChange={changeDifficulty}>
              {difficulties.map((difficulty) => (
                <option key={difficulty.value} value={difficulty.value}>
                  {difficulty.label}
                </option>
              ))}
            </select>
          </>
        ) : (
          <button onClick={restart}>RESTART</button>
        )}
        <div style={{ width: "100%", display: "inline-block" }}>
          <div style={{ width: "20%", display: "inline-block" }}>
            <h4>List of showed cards</h4>
            <ul>
              {showedCards.map((calledCard) => (
                <li key={calledCard}>{calledCard}</li>
              ))}
            </ul>
          </div>
          <div
            style={{
              width: "60%",
              display: "inline-block",
              verticalAlign: "top",
            }}
          >
            <table>
              <thead>
                <tr>
                  <th>B</th>
                  <th>I</th>
                  <th>N</th>
                  <th>G</th>
                  <th>O</th>
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
