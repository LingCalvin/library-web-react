import React from 'react';
import { Button } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

interface NavBarLinkProps {
  to: string;
  text: string;
}

export default function NavBarLink({ to, text }: NavBarLinkProps) {
  const { pathname } = useLocation();
  return (
    <Button
      component={Link}
      to={to}
      color={pathname === to ? 'primary' : undefined}
    >
      {text}
    </Button>
  );
}
