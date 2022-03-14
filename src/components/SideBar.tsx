import { FC, memo } from "react";
import { Card, CardContent, List, ListItem, ListItemText, Typography } from "@mui/material";

import { config } from "@configs/index";
import { showedCardsPropsInterface } from "@interfaces/showedCardsPropsInterface";

export const SideBar: FC<showedCardsPropsInterface> = props => {
  const { showedCards } = props;
  const { totalCards } = config;
  return (
    <Card sx={{ minWidth: 275, maxHeight: 500, overflow: "auto" }}>
      <CardContent>
        <Typography
          variant="h6"
          component="div"
        >{`List of showed cards: ${showedCards.length}/${totalCards}`}</Typography>
        <List>
          {showedCards.map(card => (
            <ListItem disablePadding key={card} color="text.secondary">
              <ListItemText sx={{ ml: 2 }} primary={` - ${card}`} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default memo(SideBar);
