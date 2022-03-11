import { FC } from 'react';
import { Button, MenuItem, Select, SelectChangeEvent, Stack } from '@mui/material';

import { config } from '../configs';
import { HeaderPropsInterface } from '../interfaces/HeaderPropsInterface';
import Image from 'next/image';

export const Header: FC<HeaderPropsInterface> = props => {
  const { state, dispatch, openSnackbar } = props;
  const { status, speed, difficulty } = state;
  const { speeds, difficulties } = config;

  const start = () => {
    dispatch({ type: 'start-game' });
    const interval = setInterval(() => {
      dispatch({ type: 'show-card', interval });
    }, speed);
  };

  const restart = () => {
    if (window.confirm('Are you really want to restart the game?')) {
      dispatch({ type: 'restart-game' });
      openSnackbar({
        message: 'Game Restarted.',
        status: 'success'
      });
    }
  };

  const changeDifficulty = (event: SelectChangeEvent<number>) => {
    const difficulty = event.target.value as string;
    openSnackbar({
      message: `You will have ${difficulty}/${config.totalCards} cards.`,
      status: 'info'
    });
    dispatch({ type: 'game-difficulty', difficulty: parseInt(difficulty) });
  };

  const changeSpeed = (event: SelectChangeEvent<number>) => {
    const speed = event.target.value as string;
    openSnackbar({
      message: `Delay in showing cards changed to: ${speed}ms`,
      status: 'info'
    });
    dispatch({ type: 'game-speed', speed: parseInt(speed) });
  };

  return (
    <Stack direction="row" spacing={5} mb={4}>
      <Image src="/logo.png" alt="logo" width={134} height={50} />
      {status === 'initiated' ? (
        <Button variant="contained" color="success" onClick={start}>
          START
        </Button>
      ) : (
        <Button variant="contained" color="error" onClick={restart}>
          RESTART
        </Button>
      )}
      <Select
        onChange={changeSpeed}
        value={speed}
        disabled={status !== 'initiated'}
        sx={{ width: '100px' }}
      >
        {speeds.map(speed => (
          <MenuItem key={speed.value} value={speed.value}>
            {speed.label}
          </MenuItem>
        ))}
      </Select>
      <Select
        onChange={changeDifficulty}
        value={difficulty}
        disabled={status !== 'initiated'}
        sx={{ width: '150px' }}
      >
        {difficulties.map(difficulty => (
          <MenuItem key={difficulty.value} value={difficulty.value}>
            {difficulty.label}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
};
