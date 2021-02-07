import {
  ButtonGroup,
  Card,
  CardContent,
  Grid,
  Button,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

export default function RequestSubmitted() {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} direction="column">
          <Grid item xs>
            <Typography variant="h5">Request submitted</Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body2">
              If your email is associated with an account, we will send you
              instructions on resetting your password.
            </Typography>
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
    </Card>
  );
}
