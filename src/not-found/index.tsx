import {
  Box,
  makeStyles,
  Typography,
  Link as MaterialLink,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function NotFound() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h1">404</Typography>
      <Typography variant="h5">Page Not Found</Typography>
      <Typography>
        The page you requested could not be found. It may have been deleted or
        moved.
      </Typography>
      <MaterialLink component={Link} to="/">
        Back to Home
      </MaterialLink>
    </Box>
  );
}
