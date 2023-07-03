import { Container } from "@mui/material";
import React, { useContext } from "react";

import { AuthContext, LoginForm } from "@features/auth";

function Login() {
  // const { login } = useContext(AuthContext);

  function handleSubmit({ username, password }) {
    // console.log(data);
    // const res = login(username, password);
    // console.log(res);
  }

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
      <LoginForm onSubmits={handleSubmit} />
    </Container>
  );
}

export default Login;
