import {
  Card,
  CardContent,
  Grid,
  Typography,
  LinearProgress,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';

interface FormCardProps {
  /**
   * The heading.
   */
  heading: string;
  /**
   * The message to be displayed below the heading.
   */
  message?: string;
  /**
   * The form. This component gets placed between the heading and footer.
   */
  form: React.ReactNode;
  /**
   * The footer.
   */
  footer?: React.ReactNode;
  /**
   * The error message.
   */
  errorMessage?: string;
  /**
   * Whether a loading bar should be displayed.
   */
  loading?: boolean;
}

export default function FormCard({
  heading,
  message,
  form,
  footer,
  errorMessage,
  loading,
}: FormCardProps) {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} direction="column">
          <Grid item xs>
            <Typography variant="h5">{heading}</Typography>
          </Grid>
          {errorMessage && (
            <Grid item xs>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          )}
          {message && (
            <Grid item xs>
              <Typography variant="body2">{message}</Typography>
            </Grid>
          )}
          <Grid item xs>
            {form}
          </Grid>
          {footer && (
            <Grid item xs>
              {footer}
            </Grid>
          )}
        </Grid>
      </CardContent>
      {loading && <LinearProgress />}
    </Card>
  );
}
