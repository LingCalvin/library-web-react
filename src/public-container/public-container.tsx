import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import NavBar from './nav-bar';

interface PublicContainerProps {
  children?: React.ReactNode;
}

const useStyles = makeStyles((theme) => ({
  content: { margin: theme.spacing(2) },
}));

export default function PublicContainer({ children }: PublicContainerProps) {
  const classes = useStyles();
  return (
    <Box>
      <NavBar />
      <Box className={classes.content}>{children}</Box>
    </Box>
  );
}
