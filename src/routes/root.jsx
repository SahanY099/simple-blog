import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React, { forwardRef } from "react";
import { Outlet, Link as RouterLink } from "react-router-dom";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { AuthProvider } from "@features/auth";
import { Header } from "@features/ui";

const LinkBehavior = forwardRef((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#4356ff",
      contrastText: "#ffffff",
    },

    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#2c2c2c",
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

function Root() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <Header />
          <Outlet />
        </AuthProvider>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default Root;
