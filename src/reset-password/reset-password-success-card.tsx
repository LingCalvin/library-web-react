import { Button } from '@material-ui/core';
import React from 'react';
import FormCard from '../common/components/form-card';

interface ResetPasswordSuccessCardProps {
  countdown: string;
  onRedirect: () => void;
}

export default function ResetPasswordSuccessCard({
  countdown,
  onRedirect,
}: ResetPasswordSuccessCardProps) {
  return (
    <FormCard
      heading="Password successfully reset"
      message={`You will be redirected to the login page in ${countdown}.`}
      form={
        <Button
          type="button"
          variant="contained"
          color="primary"
          fullWidth
          onClick={onRedirect}
        >
          Go to login page
        </Button>
      }
    />
  );
}
