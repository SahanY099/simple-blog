import { AuthContext } from "./auth.context";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function LoginForm({ onSubmit }) {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isCredsInvalid, setIsCredsInvalid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit({ username, password }) {
    const { isInvalid } = await login({ username, password });
    if (isInvalid) setIsCredsInvalid(true);
    else navigate("/");
  }

  return (
    <Stack
      direction="column"
      gap={3}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      {isCredsInvalid && (
        <Alert severity="error" sx={{ px: 4 }}>
          Username or Password is incorrect{" "}
        </Alert>
      )}
      <Controller
        name="username"
        control={control}
        rules={{ required: "Username is required" }}
        render={({ field }) => (
          <TextField
            {...field}
            error={Boolean(errors.username)}
            label="Username"
            helperText={errors.username && errors.username.message}
            variant="outlined"
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{ required: "Password is required" }}
        render={({ field }) => (
          <TextField
            {...field}
            error={Boolean(errors.password)}
            label="Password"
            type={showPassword ? "text" : "password"}
            helperText={errors.password && errors.password.message}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    position="start"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />

      <Button
        variant="contained"
        fullWidth
        // disabled={isSubmited}
        type="submit"
        sx={{ mt: 2, fontWeight: 600 }}
        // onClick={() => setIsSubmited(true)}
      >
        Login
      </Button>
    </Stack>
  );
}

export default LoginForm;
