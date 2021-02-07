import { Button, Grid, TextField, TextFieldProps } from '@material-ui/core';
import React from 'react';

export type ResetPasswordFormErrors = {
  password?: string;
  confirmPassword?: string;
};

interface ResetPasswordFormProps {
  variant?: TextFieldProps['variant'];
  password: string;
  confirmPassword: string;
  errors?: ResetPasswordFormErrors;
  onPasswordChange: (password: string) => void;
  onConfirmPasswordChange: (password: string) => void;
  onSubmit: () => void;
}

export default function ResetPasswordForm({
  variant = 'outlined',
  password,
  confirmPassword,
  errors = {},
  onPasswordChange,
  onConfirmPasswordChange,
  onSubmit,
}: ResetPasswordFormProps) {
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
          <Grid item xs>
            <TextField
              label="Confirm password"
              type="password"
              variant={variant}
              value={confirmPassword}
              error={!!errors?.confirmPassword}
              helperText={errors?.confirmPassword}
              fullWidth
              onChange={(e) => onConfirmPasswordChange(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Reset password
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
