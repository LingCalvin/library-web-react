import { makeStyles, Link as MaterialLink, Box } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import FormCard from '../common/components/form-card';
import PasswordResetRequestForm from './password-reset-request-form';

interface PasswordResetRequestCardProps {
  email: string;
  error?: string;
  errorMessage?: string;
  loading?: boolean;
  onEmailChange: (email: string) => void;
  onSubmit: () => void;
}

const useStyles = makeStyles(() => ({
  linkBox: { display: 'flex', justifyContent: 'space-between' },
}));

export default function PasswordResetRequestCard({
  email,
  error,
  errorMessage,
  loading,
  onEmailChange,
  onSubmit,
}: PasswordResetRequestCardProps) {
  const classes = useStyles();
  return (
    <FormCard
      heading="Forgot your password?"
      message="Enter your email below and we will send you a link with instructions on resetting your password."
      form={
        <PasswordResetRequestForm
          email={email}
          error={error}
          onEmailChange={onEmailChange}
          onSubmit={onSubmit}
        />
      }
      footer={
        <Box className={classes.linkBox}>
          <MaterialLink component={Link} to="/login">
            Log in
          </MaterialLink>
          <MaterialLink component={Link} to="/register">
            Register
          </MaterialLink>
        </Box>
      }
      errorMessage={errorMessage}
      loading={loading}
    />
  );
}
