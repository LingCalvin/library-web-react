import React from 'react';
import FormCard from '../common/components/form-card';
import ResetPasswordForm, {
  ResetPasswordFormErrors,
} from './reset-password-form';

interface ResetPasswordCardProps {
  password: string;
  confirmPassword: string;
  errors?: ResetPasswordFormErrors;
  errorMessage?: string;
  loading?: boolean;
  onPasswordChange: (password: string) => void;
  onConfirmPasswordChange: (password: string) => void;
  onSubmit: () => void;
}

export default function ResetPasswordCard({
  password,
  confirmPassword,
  errors,
  errorMessage,
  loading,
  onPasswordChange,
  onConfirmPasswordChange,
  onSubmit,
}: ResetPasswordCardProps) {
  return (
    <FormCard
      heading="Reset your password"
      form={
        <ResetPasswordForm
          password={password}
          confirmPassword={confirmPassword}
          errors={errors}
          onPasswordChange={onPasswordChange}
          onConfirmPasswordChange={onConfirmPasswordChange}
          onSubmit={onSubmit}
        />
      }
      errorMessage={errorMessage}
      loading={loading}
    />
  );
}
