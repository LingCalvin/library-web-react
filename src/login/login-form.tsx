import { Button, Grid, TextField, TextFieldProps } from '@material-ui/core';
import React from 'react';

export type LoginFormErrors = { email?: string; password?: string };

interface LoginFormProps {
  variant?: TextFieldProps['variant'];
  email: string;
  password: string;
  errors?: LoginFormErrors;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onSubmit: () => void;
}

export default function LoginForm({
  variant = 'outlined',
  email,
  password,
  errors = {},
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: LoginFormProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Grid container spacing={2} direction="column">
        <Grid container spacing={1} item xs direction="column">
          <Grid item xs>
            <TextField
              label="Email"
              variant={variant}
              value={email}
              error={!!errors?.email}
              helperText={errors?.email}
              fullWidth
              onChange={(e) => onEmailChange(e.target.value)}
            />
          </Grid>
          <Grid item xs>
            <TextField
              label="Password"
              type="password"
              variant={variant}
              value={password}
              error={!!errors?.password}
              helperText={errors?.password}
              fullWidth
              onChange={(e) => onPasswordChange(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Log in
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
