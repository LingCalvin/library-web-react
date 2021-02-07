import { ButtonGroup, Button } from '@material-ui/core';
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
        <ButtonGroup variant="text" color="primary" size="small">
          <Button type="button">Register</Button>
          <Button type="button" component={Link} to="/forgot-password">
            Recover account
          </Button>
        </ButtonGroup>
      }
      errorMessage={errorMessage}
      loading={loading}
    />
  );
}
