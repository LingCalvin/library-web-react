import { Box, Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Box>
      <Button component={Link} to="/login">
        Log in
      </Button>
    </Box>
  );
}
