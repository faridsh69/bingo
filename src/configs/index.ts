import ConfigInterface from "@interfaces/ConfigInterface";

export const config: ConfigInterface = {
  totalCards: 75,
  dimention: 5,
  freeCardIndex: 2,
  freeCardValue: "******",
  selectedCardClassName: "active",
  bingoCardClassName: "bingo",
  speeds: [
    { value: 31, label: "32X" },
    { value: 62, label: "16X" },
    { value: 125, label: "8X" },
    { value: 250, label: "4X" },
    { value: 500, label: "2X" },
    { value: 1000, label: "1X" },
  ],
  difficulties: [
    { value: 55, label: "Easy" },
    { value: 45, label: "Medium" },
    { value: 35, label: "Hard" },
  ],
};
