import React from 'react';
import FormCard from '../common/components/form-card';
import RegistrationForm, { RegistrationFormProps } from './registration-form';
import { Link as MaterialLink } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
      footer={
        <MaterialLink component={Link} to="/login">
          Already have an account?
        </MaterialLink>
      }
      errorMessage={errorMessage}
      loading={loading}
    />
  );
}
