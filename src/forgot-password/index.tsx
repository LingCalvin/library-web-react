import { Container, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import PasswordResetRequestCard from './password-reset-request-card';
import validator from 'validator';
import accountsService from '../common/services/accounts.service';
import RequestSubmitted from './request-submitted-card';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

const emailErrorMessage = 'Invalid email';

export default function ForgotPassword() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [error, setError] = useState(emailErrorMessage);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function onEmailChange(email: string) {
    setEmail(email);
    setError(validator.isEmail(email) ? '' : 'Invalid email');
  }

  async function onSubmit() {
    if (loading) {
      return;
    }

    setShowError(true);
    setErrorMessage('');

    if (error) {
      return;
    }

    try {
      setLoading(true);
      await accountsService.requestPasswordReset(email);
      setSubmitted(true);
    } catch (e) {
      if (e.response?.data?.message) {
        setErrorMessage(e.response.data.message);
      } else {
        setErrorMessage(e.toString());
      }
    }
    setLoading(false);
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="xs">
        {!submitted ? (
          <PasswordResetRequestCard
            email={email}
            error={showError ? error : undefined}
            errorMessage={errorMessage}
            loading={loading}
            onEmailChange={onEmailChange}
            onSubmit={onSubmit}
          />
        ) : (
          <RequestSubmitted />
        )}
      </Container>
    </div>
  );
}
