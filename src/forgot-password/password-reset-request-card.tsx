import { ButtonGroup, Button } from '@material-ui/core';
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

export default function PasswordResetRequestCard({
  email,
  error,
  errorMessage,
  loading,
  onEmailChange,
  onSubmit,
}: PasswordResetRequestCardProps) {
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
        <ButtonGroup variant="text" color="primary" size="small">
          <Button type="button" component={Link} to="/login">
            Log in
          </Button>
          <Button type="button">Register</Button>
        </ButtonGroup>
      }
      errorMessage={errorMessage}
      loading={loading}
    />
  );
}
