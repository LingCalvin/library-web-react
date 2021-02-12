import { AppBar, Toolbar, Box, Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import NavBarLink from './nav-bar-link';

const useStyles = makeStyles(() => ({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="transparent">
      <Toolbar className={classes.navbar}>
        <Box />
        <Box>
          <NavBarLink to="/" text="Home" />
          <NavBarLink to="/collection" text="Collection" />
          <NavBarLink to="/events" text="Events" />
        </Box>
        <Button component={Link} to="/login" variant="outlined">
          Log in
        </Button>
      </Toolbar>
    </AppBar>
  );
}
