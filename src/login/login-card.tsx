import {
  ButtonGroup,
  Card,
  CardContent,
  Grid,
  Button,
  Typography,
  LinearProgress,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';
import LoginForm, { LoginFormErrors } from './login-form';

interface LoginCardProps {
  email: string;
  password: string;
  errors?: LoginFormErrors;
  errorMessage?: string;
  loading?: boolean;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onSubmit: () => void;
}

export default function LoginCard({
  email,
  password,
  errors,
  errorMessage,
  loading,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: LoginCardProps) {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} direction="column">
          <Grid item xs>
            <Typography variant="h5">Sign in</Typography>
          </Grid>
          {errorMessage && (
            <Grid item xs>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          )}
          <Grid item xs>
            <LoginForm
              email={email}
              password={password}
              errors={errors}
              onEmailChange={onEmailChange}
              onPasswordChange={onPasswordChange}
              onSubmit={onSubmit}
            />
          </Grid>
          <Grid item xs>
            <ButtonGroup variant="text" color="primary" size="small">
              <Button type="button">Recover account</Button>
              <Button type="button">Register</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </CardContent>
      {loading && <LinearProgress />}
    </Card>
  );
}
