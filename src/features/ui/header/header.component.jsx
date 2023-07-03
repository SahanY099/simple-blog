import {
  AppBar,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";

import MenuIcon from "@mui/icons-material/menu";

import { AuthContext } from "@features/auth";
import NavLink from "./nav-link.component";
import { AccountCircle } from "@mui/icons-material";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const isAuthenticated = user.token != null;
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
            </Stack>
            <Stack direction="row" gap={2}>
              {isAuthenticated ? (
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    onClick={handleMenu}
                    color="primary"
                  >
                    <AccountCircle sx={{ width: "100%" }} />
                  </IconButton>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleCloseUserMenu();
                        logout();
                      }}
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                </div>
              ) : (
                <NavLink href="/login">Login</NavLink>
              )}
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
