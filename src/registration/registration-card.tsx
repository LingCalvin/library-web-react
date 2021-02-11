import React from 'react';
import FormCard from '../common/components/form-card';
import RegistrationForm, { RegistrationFormProps } from './registration-form';

interface RegistrationCardProps extends RegistrationFormProps {
  errorMessage?: string;
  loading?: boolean;
}

export default function RegistrationCard({
  errorMessage,
  loading,
  ...registrationFormProps
}: RegistrationCardProps) {
  return (
    <FormCard
      heading="Register"
      form={<RegistrationForm {...registrationFormProps} />}
      errorMessage={errorMessage}
      loading={loading}
    />
  );
}
