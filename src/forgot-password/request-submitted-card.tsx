import {
  Card,
  CardContent,
  Grid,
  Typography,
  Link as MaterialLink,
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
            <MaterialLink type="button" component={Link} to="/login">
              Log in
            </MaterialLink>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
