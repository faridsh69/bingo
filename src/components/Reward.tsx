import { Typography } from "@mui/material";
import { FC } from "react";
import { animated, useSpring } from "react-spring";

export const Reward: FC = () => {
  const bingoStyles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: "#ffaaee" },
      { opacity: 0.5, color: "rgb(12,30,150)" },
    ],
    from: { opacity: 0.3, color: "red" },
  });

  return (
    <animated.div style={bingoStyles} className="reward">
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        *** Bingo ***
        <br /> You are amazing!
        <br /> You will be in mars with ELON!!
      </Typography>
    </animated.div>
  );
};
