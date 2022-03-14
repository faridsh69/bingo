import { useEffect, useMemo } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { config } from "@configs/index";
import { useGameReducer } from "@hooks/useBingoReducer";
import { useSnackbar } from "@hooks/useSnackbar";
import Header from "@components/Header";
import SideBar from "@components/SideBar";
import { Reward } from "@components/Reward";
import { Grid, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";

const Index: NextPage = () => {
  const [state, dispatch] = useGameReducer();
  const openSnackbar = useSnackbar();

  const { speed, difficulty, status, tableCards, showedCards, selectedCards, bingoCards } = state;
  const { bingoCardClassName, selectedCardClassName } = config;

  const headerStateProp = useMemo(() => state, [speed, difficulty, status]);

  useEffect(() => {
    dispatch({ type: "prepare-game" });
  }, [dispatch]);

  useEffect(() => {
    if (selectedCards.length > 1) {
      dispatch({ type: "check-bingo" });
    }
  }, [tableCards, selectedCards, dispatch]);

  const selectCard = (event: React.MouseEvent<HTMLElement>) => {
    const card = (event.target as HTMLElement).innerText;
    if (selectedCards.includes(card)) {
      openSnackbar({
        message: `Card is already selected: ${card}`,
        severity: "info",
      });

      return;
    }
    if (!showedCards.includes(card)) {
      openSnackbar({
        message: `Selected Card is not in list of showed cards: ${card}`,
        severity: "warning",
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
      <Header state={headerStateProp} dispatch={dispatch} openSnackbar={openSnackbar} />
      {bingoCards.length ? <Reward /> : ""}
      <Grid container spacing={2}>
        <Grid item md={8}>
          <TableContainer>
            <Table>
              <TableBody>
                {tableCards.map(row => (
                  <TableRow key={JSON.stringify(row)}>
                    {row.map(card => (
                      <TableCell
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
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item md={4}>
          <SideBar showedCards={showedCards} />
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
