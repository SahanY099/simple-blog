import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

function LoginForm({ onSubmit }) {
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

  return (
    <Stack
      direction="column"
      gap={3}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
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
        type="submit"
        sx={{ mt: 2, fontWeight: 600 }}
      >
        Login
      </Button>
    </Stack>
  );
}

export default LoginForm;
