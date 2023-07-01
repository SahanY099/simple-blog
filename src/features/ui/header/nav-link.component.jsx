import { Button } from "@mui/material";
import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

function NavLink({ href, children }) {
  return (
    <Button
      component={RouterNavLink}
      to={href}
      sx={{
        px: 2,
        borderRadius: 5,
        color: "text.primary",
        textDecoration: "none",
        "&.active": {
          color: "primary.contrastText",
          backgroundColor: "primary.main",
        },
      }}
    >
      {children}
    </Button>
  );
}

export default NavLink;
