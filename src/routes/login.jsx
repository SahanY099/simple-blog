import { Container } from "@mui/material";
import React from "react";

import { LoginForm } from "@features/auth";

function Login() {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "calc(100svh - 64px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginForm onSubmit={handleSubmit} />
    </Container>
  );
}

export default Login;
