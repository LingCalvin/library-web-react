import { Link as MaterialLink, Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import FormCard from '../common/components/form-card';
import LoginForm, { LoginFormErrors } from './login-form';

interface LoginCardProps {
  email: string;
  password: string;
  errors?: LoginFormErrors;
  errorMessage?: string;
  loading?: boolean;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onSubmit: () => void;
}

const useStyles = makeStyles(() => ({
  linkBox: { display: 'flex', justifyContent: 'space-between' },
}));

export default function LoginCard({
  email,
  password,
  errors,
  errorMessage,
  loading,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: LoginCardProps) {
  const classes = useStyles();
  return (
    <FormCard
      heading="Sign in"
      form={
        <LoginForm
          email={email}
          password={password}
          errors={errors}
          onEmailChange={onEmailChange}
          onPasswordChange={onPasswordChange}
          onSubmit={onSubmit}
        />
      }
      footer={
        <Box className={classes.linkBox}>
          <MaterialLink component={Link} to="/forgot-password">
            Recover account
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
