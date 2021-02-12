import { Typography } from '@material-ui/core';
import React from 'react';
import PublicContainer from '../public-container/public-container';

export default function Home() {
  return (
    <PublicContainer>
      <Typography>
        Welcome to the library! You can view our collection, put books on hold,
        or see our upcoming events.
      </Typography>
    </PublicContainer>
  );
}
