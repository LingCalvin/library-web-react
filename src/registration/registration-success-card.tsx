import { Link as MaterialLink } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import FormCard from '../common/components/form-card';

export default function RegistrationSuccessCard() {
  return (
    <FormCard
      heading="Account registered"
      message={
        'Your account has been registered. To activate your account, please verify your email using the link we sent to the email you registered with. If you do not activate your account within 7 days, it will be automatically deleted.'
      }
      form={
        <MaterialLink component={Link} to="/login">
          Go to login page
        </MaterialLink>
      }
    />
  );
}
