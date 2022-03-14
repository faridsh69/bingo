import { createTheme } from "@mui/material/styles";

export enum ThemeVariant {
  DARK = "dark",
  LIGHT = "light",
}

export enum Color {
  PRM_MAIN = "var(--color-primary-main)",
  PRM_LIGHT = "var(--color-primary-light)",
  PRM_LIGHTER = "var(--color-primary-lighter)",
  PRM_DARK = "var(--color-primary-dark)",
  PRM_DARKER = "var(--color-primary-darker)",
  SEC_MAIN = "var(--color-secondary-main)",
  SEC_DARK = "var(--color-secondary-dark)",
  LIGHT = "var(--color-light)",
  GREY = "var(--color-grey)",
  GREY_DARK = "var(--color-grey-dark)",
  GREY_LIGHT = "var(--color-grey-light)",
  WHITE = "var(--color-white)",
  BLACK = "var(--color-black)",
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
    bigDesktop: true;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
      bigDesktop: 1800,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subtitle1: "p",
          subtitle2: "p",
          h5: "p",
          h6: "p",
        },
      },
      styleOverrides: {
        root: {
          fontSize: "1.6rem",
          fontFamily: "Montserrat",
          color: "var(--color-secondary-dark)",
          lineHeight: 1.5,
        },
        h1: {
          fontSize: "4.9rem",
          fontWeight: 500,

          "&.regular": {
            fontWeight: 400,
          },
        },
        h2: {
          fontSize: "3rem",
          fontWeight: 500,
          color: "inherit",
          letterSpacing: 0,

          "&.regular": {
            fontWeight: 400,
          },
        },
        h3: {
          fontSize: "2.6rem",
          color: "inherit",
        },
        h4: {
          fontSize: "2.5rem",
          color: "inherit",

          "&.medium": {
            fontWeight: 500,
          },
        },
        h5: {
          fontSize: "2rem",
          fontWeight: 500,
          letterSpacing: 0,
          lineHeight: 1.5,

          "&.regular": {
            fontWeight: 400,
          },
        },
        h6: {
          fontSize: "1.8rem",
          letterSpacing: 0,
          lineHeight: 1.5,
          fontWeight: 400,

          "&.medium": {
            fontWeight: 500,
          },
        },
        caption: {
          fontWeight: 500,
          display: "inline-block",
          color: "var(--color-secondary-main)",
        },
        subtitle1: {
          fontWeight: 500,
          display: "inline-block",
          fontSize: "1.4rem",
          color: "var(--color-secondary-main)",

          "&.regular": {
            fontWeight: 400,
          },
        },
        subtitle2: {
          fontWeight: 400,
          display: "inline-block",
          fontSize: "1.4rem",
          color: "var(--color-secondary-dark)",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontWeight: 500,
          color: Color.SEC_MAIN,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontFamily: "Montserrat",
          fontSize: "1.6rem",
          fontWeight: 500,
          color: "var(--color-secondary-main)",

          "&::placeholder": {
            fontSize: "1.6rem",
            opacity: 1,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "1.6rem",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "1.6rem",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderWidth: 2,
          borderColor: "var(--color-secondary-main)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "&.sm-pd input": {
            padding: "1rem 1.4rem",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1.6rem",
          fontFamily: "Montserrat",
          textTransform: "initial",
          boxShadow: "none",
          borderRadius: 5,
          height: "5rem",
          borderColor: "currentColor",

          "&:hover": {
            borderColor: "currentColor",
          },

          "&.bold": {
            fontWeight: 600,
          },

          "&.shadow": {
            boxShadow: "0px 0px 20px #06707C48",
          },

          "&[aria-label='underline']": {
            fontSize: "inherit",
            textDecoration: "underline",
            height: "auto",
            paddingRight: 0,
            paddingLeft: 0,
            fontWeight: "inherit",
            color: "inherit",
          },
        },
        outlined: {
          borderWidth: 2,

          "&:hover": {
            borderWidth: 2,
          },
        },

        sizeLarge: {
          fontSize: "1.8rem",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: "4.6rem",
          height: "4.6rem",

          "&.md": {
            width: "4.2rem",
            height: "4.2rem",
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          "&.MuiPaper-root": {
            borderRadius: 0,
            boxShadow: "0px 0px 30px #00000029",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "1.6rem",
          fontFamily: "Montserrat",
          fontWeight: 500,
          color: "var(--color-secondary-main)",
          paddingLeft: "2rem",
          paddingRight: "2rem",

          "&.ft-lg": {
            fontSize: "2rem",
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: "transparent",
          boxShadow: "none",
          maxWidth: "100%",
          maxHeight: "100%",
          margin: 0,
        },
        paperFullScreen: {
          background: Color.WHITE,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat",
          textTransform: "initial",
          fontSize: "1.6rem",
          fontWeight: 400,

          "&.custom-tab": {
            "& .MuiTabs-indicator": {
              height: 5,
              backgroundColor: Color.SEC_DARK,
            },

            "& button.MuiTab-root": {
              color: Color.SEC_MAIN,
              opacity: 0.5,
              fontWeight: 500,

              "&.Mui-selected": {
                color: Color.SEC_DARK,
                opacity: 1,
              },
            },
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat",
          textTransform: "initial",
          fontSize: "1.6rem",
          fontWeight: 400,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          paddingLeft: 15,
          paddingTop: 11,
          paddingBottom: 11,
          display: "flex",
          alignItems: "center",

          "& ~ svg": {
            position: "absolute",
            right: 20,
            zIndex: -1,
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "&.lg": {
            minWidth: "26rem",
          },
          "&.md": {
            minWidth: "16.8rem",
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          zIndex: 9999,

          "&.dark": {
            backdropFilter: "blur(1rem)",
            background: "rgba(38, 30, 31, 0.8)",
          },

          "&.light": {
            backdropFilter: "blur(0.5rem)",
            background: "rgba(255, 248, 239, 0.8)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          padding: "0 0.5rem",
          borderRadius: "2.9rem",
        },
        label: {
          fontSize: "1.4rem",
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          fontSize: "1.4rem",
          fontFamily: "Montserrat",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "2.5rem",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#00B8CE",
      light: "#17D4E9",
      contrastText: "#fff",
    },
    secondary: {
      light: "#574D44",
      main: "#261E1F",
      contrastText: "#fff",
    },
  },
});
