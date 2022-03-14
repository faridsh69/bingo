import { FC, memo } from "react";
import Image from "next/image";
import { Button, Grid, MenuItem, Select, SelectChangeEvent } from "@mui/material";

import { config } from "@configs/index";
import { HeaderPropsInterface } from "@interfaces/HeaderPropsInterface";

const Header: FC<HeaderPropsInterface> = props => {
  const { state, dispatch, openSnackbar } = props;
  const { status, speed, difficulty } = state;
  const { speeds, difficulties } = config;

  const start = () => {
    dispatch({ type: "start-game" });
    const interval = setInterval(() => {
      dispatch({ type: "show-card", interval });
    }, speed);
  };

  const restart = () => {
    if (window.confirm("Are you really want to restart the game?")) {
      dispatch({ type: "restart-game" });
      openSnackbar({
        message: "Game Restarted.",
        severity: "success",
      });
    }
  };

  const changeDifficulty = (event: SelectChangeEvent<number>) => {
    const difficulty = event.target.value as string;
    openSnackbar({
      message: `You will have ${difficulty}/${config.totalCards} cards.`,
      severity: "info",
    });
    dispatch({ type: "game-difficulty", difficulty: parseInt(difficulty) });
  };

  const changeSpeed = (event: SelectChangeEvent<number>) => {
    const speed = event.target.value as string;
    openSnackbar({
      message: `Delay in showing cards changed to: ${speed}ms`,
      severity: "info",
    });
    dispatch({ type: "game-speed", speed: parseInt(speed) });
  };

  return (
    <Grid container spacing={1} m={1}>
      <Grid item md={2} sm={3}>
        <Image src="/logo.png" alt="logo" width={134} height={50} />
      </Grid>
      <Grid item sm={2}>
        {status === "initiated" ? (
          <Button variant="contained" color="success" onClick={start}>
            START
          </Button>
        ) : (
          <Button variant="contained" color="error" onClick={restart}>
            RESTART
          </Button>
        )}
      </Grid>
      <Grid item sm={7}>
        <Select onChange={changeSpeed} value={speed} disabled={status !== "initiated"} sx={{ mr: 2 }}>
          {speeds.map(speed => (
            <MenuItem key={speed.value} value={speed.value}>
              {speed.label}
            </MenuItem>
          ))}
        </Select>
        <Select onChange={changeDifficulty} value={difficulty} disabled={status !== "initiated"}>
          {difficulties.map(difficulty => (
            <MenuItem key={difficulty.value} value={difficulty.value}>
              {difficulty.label}
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </Grid>
  );
};

export default memo(Header);
