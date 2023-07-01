import {
  AppBar,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

import MenuIcon from "@mui/icons-material/menu";

import NavLink from "./nav-link.component";

export default function Header() {
  return (
    <AppBar position="static" color="background" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar>
          <Stack
            direction="row"
            gap={2}
            justifyContent="space-between"
            alignItems="center"
            sx={{ flexGrow: 1 }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">Simple Blog</Typography>
            </Stack>
            <Stack direction="row" gap={2}>
              <NavLink href="/">Home</NavLink>
              <NavLink href="/feed">Temp</NavLink>
            </Stack>
            <Stack direction="row" gap={2}>
              <NavLink href="/login">Login</NavLink>
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
