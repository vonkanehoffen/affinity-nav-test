import { createMuiTheme } from "@material-ui/core/styles";
import { colors } from "./style-data";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";

// See https://material-ui.com/customization/default-theme/
export const theme = createMuiTheme({
  spacing: 16, // TBC
  palette: {
    primary: {
      main: colors.vibrantViolet.value,
      dark: "#6248CC", // TODO: This should probably be in the Brand Guidelines / DS colour object
      contrastText: "#fff"
    },
    secondary: {
      main: colors.auroraTeal.value,
      dark: colors.auroraTealDark.value
    },
    // TODO: Can / should we define different nodes entirely here?
    // error: {
    //     main: colors.auroraBlueDark,
    // },
    background: {
      default: colors.neutralGhost.value
    }
  },
  shape: {
    borderRadius: 5
  },
  typography: {
    // Note: 16px default htmlFontSize base.
    fontSize: 14, // default base
    fontFamily: "'Open Sans', sans-serif",
    fontWeightBold: 600,
    h1: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "2rem",
      fontWeight: 600
    },
    h2: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "1.75rem",
      fontWeight: 600
    },
    h3: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "1.25rem",
      fontWeight: 600
    },
    h4: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "1rem",
      fontWeight: 600
    },
    h5: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "0.875rem",
      fontWeight: 600
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
      fontSize: "0.875rem"
    }
  },
  overrides: {
    // i.e. packages/material-ui/src/Toolbar/Toolbar.js
    MuiToolbar: {
      root: {
        color: "#ff0"
      }
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: "2rem"
      }
    },
    MuiButton: {
      root: {
        padding: "17px 32px"
      },
      contained: {
        boxShadow: "none"
      },
      containedSecondary: {
        color: "white"
      },
      sizeLarge: {
        fontSize: "0.875rem",
        padding: "20px 30px"
      },
      sizeSmall: {
        fontSize: "0.875rem"
      }
    }
  }
});

export const AuroraTheme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export { colors };

export default AuroraTheme;
