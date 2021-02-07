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
import { Link } from 'react-router-dom';
import PasswordResetRequestForm from './password-reset-request-form';

interface PasswordResetRequestCardProps {
  email: string;
  error?: string;
  errorMessage?: string;
  loading?: boolean;
  onEmailChange: (email: string) => void;
  onSubmit: () => void;
}

export default function PasswordResetRequestCard({
  email,
  error,
  errorMessage,
  loading,
  onEmailChange,
  onSubmit,
}: PasswordResetRequestCardProps) {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} direction="column">
          <Grid item xs>
            <Typography variant="h5">Forgot your password?</Typography>
          </Grid>
          {errorMessage && (
            <Grid item xs>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          )}
          <Grid item xs>
            <Typography variant="body2">
              Enter your email below and we will send you a link with
              instructions on resetting your password.
            </Typography>
          </Grid>
          <Grid item xs>
            <PasswordResetRequestForm
              email={email}
              error={error}
              onEmailChange={onEmailChange}
              onSubmit={onSubmit}
            />
          </Grid>
          <Grid item xs>
            <ButtonGroup variant="text" color="primary" size="small">
              <Button type="button" component={Link} to="/login">
                Log in
              </Button>
              <Button type="button">Register</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </CardContent>
      {loading && <LinearProgress />}
    </Card>
  );
}
