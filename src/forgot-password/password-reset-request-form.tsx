import { Button, Grid, TextField, TextFieldProps } from '@material-ui/core';
import React from 'react';

interface PasswordResetRequestFormProps {
  variant?: TextFieldProps['variant'];
  email: string;
  error?: string;
  onEmailChange: (email: string) => void;
  onSubmit: () => void;
}

export default function PasswordResetRequestForm({
  variant = 'outlined',
  email,
  error,
  onEmailChange,
  onSubmit,
}: PasswordResetRequestFormProps) {
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
              error={!!error}
              helperText={error}
              fullWidth
              onChange={(e) => onEmailChange(e.target.value)}
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
