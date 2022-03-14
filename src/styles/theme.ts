import { createTheme } from "@mui/material/styles";
import { Interpolation } from "@emotion/react";
import { Theme } from "@mui/system";

export const themeGlobalStyles: Interpolation<Theme> = {
  ":root": {
    "--body-bg": "rgb(235, 240, 245)",
    "--cell-bg": "rgb(235, 154, 235, 0.1)",
    "--cell-border": "rgb(129, 191, 219)",
    "--cell-hover": "rgb(178, 145, 231, 0.3)",
    "--cell-active-color": "rgb(224, 68, 20)",
    "--cell-active-bg": "rgba(250, 100, 180, 0.2)",
    "--cell-bingo-color": "rgb(49, 228, 49)",
    "--cell-bingo-bg": "rgba(49, 228, 49, 0.1)",
  },
  body: {
    boxSizing: "border-box",
  },
};

const themeWithBreakPoints = createTheme();
export const muiTheme = createTheme(themeWithBreakPoints, {
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--cell-bg)",
          borderStyle: "dotted",
          borderWidth: "0.1rem",
          borderColor: "var(--cell-border)",
          padding: "1rem",
          margin: "1rem",
          cursor: "pointer",
          userSelect: "none",
          "&:hover": {
            backgroundColor: "var(--cell-hover)",
          },
          "&.active": {
            color: "var(--cell-active-color)",
            backgroundColor: "var(--cell-active-bg)",
          },
          "&.bingo": {
            color: "var(--cell-bingo-color)",
            backgroundColor: "var(--cell-bingo-bg)",
          },
          [themeWithBreakPoints.breakpoints.down("md")]: {
            fontSize: "0.5rem",
            padding: "0.2rem",
            margin: "0.2rem",
          },
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          overflow: "auto",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          [themeWithBreakPoints.breakpoints.down("md")]: {
            fontSize: "0.7rem",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          [themeWithBreakPoints.breakpoints.down("md")]: {
            fontSize: "0.5rem",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          [themeWithBreakPoints.breakpoints.down("md")]: {
            fontSize: "0.5rem",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          [themeWithBreakPoints.breakpoints.down("md")]: {
            fontSize: "0.5rem",
          },
        },
      },
    },
  },
  palette: {
    background: {
      default: "var(--body-bg)",
    },
  },
});
