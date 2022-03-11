import { useEffect } from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import { config } from '../configs';
import { useGameReducer } from '../hooks/useBingoReducer';
import { useSnackbar } from '../hooks/useSnackbar';
import { Header } from '../components/Header';
import { SideBar } from '../components/SideBar';
import { Grid, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';

const Index: NextPage = () => {
  const [state, dispatch] = useGameReducer();
  const [openSnackbar] = useSnackbar();

  const { tableCards, showedCards, selectedCards, bingoCards } = state;
  const { bingoCardClassName, selectedCardClassName } = config;

  useEffect(() => {
    dispatch({ type: 'initiate-game' });
  }, []);

  useEffect(() => {
    dispatch({ type: 'check-bingo' });
  }, [tableCards, selectedCards]);

  const selectCard = (event: React.MouseEvent<HTMLElement>) => {
    const card = (event.target as HTMLElement).innerText;
    if (selectedCards.includes(card)) {
      openSnackbar({
        message: `Card is already selected: ${card}`,
        status: 'info'
      });

      return;
    }
    if (!showedCards.includes(card)) {
      openSnackbar({
        message: `Selected Card is not in list of showed cards: ${card}`,
        status: 'warning'
      });

      return;
    }

    dispatch({ type: 'select-card', card });
  };

  return (
    <>
      <Head>
        <title>Bingo App</title>
      </Head>
      <Header state={state} dispatch={dispatch} openSnackbar={openSnackbar} />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <SideBar showedCards={showedCards} />
        </Grid>
        <Grid item xs={8}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                            : ' '
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
      </Grid>
    </>
  );
};

export default Index;
