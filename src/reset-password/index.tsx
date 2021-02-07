import { Container, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ResetPasswordCard from './reset-password-card';
import validator from 'validator';
import { ResetPasswordFormErrors } from './reset-password-form';
import { useHistory, useParams } from 'react-router-dom';
import ResetPasswordSuccessCard from './reset-password-success-card';
import accountsService from '../common/services/accounts.service';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

const passwordErrorMessage = 'This field is required';
const confirmPasswordErrorMessage = 'Passwords must match';

export default function ResetPassword() {
  const history = useHistory();
  const { token } = useParams<{ token: string }>();
  const classes = useStyles();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<ResetPasswordFormErrors>({
    password: passwordErrorMessage,
    confirmPassword: passwordErrorMessage,
  });
  const [showErrors, setShowErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [successfullySubmitted, setSuccessfullySubmitted] = useState(false);
  const [redirectCountdown, setRedirectCountdown] = useState(10);
  const redirectCountdownString = `${redirectCountdown} second${
    redirectCountdown === 1 ? '' : 's'
  }`;

  useEffect(() => {
    if (successfullySubmitted) {
      const interval = setInterval(
        () => setRedirectCountdown((state) => state - 1),
        1000,
      );
      return () => clearInterval(interval);
    }
  }, [successfullySubmitted]);

  function redirectToLogin() {
    history.push('/login');
  }

  if (redirectCountdown <= 0) {
    redirectToLogin();
  }

  function onPasswordChange(password: string) {
    setPassword(password);
    setErrors((state) => ({
      ...state,
      password: !validator.isEmpty(password) ? undefined : passwordErrorMessage,
    }));
  }

  function onConfirmPasswordChange(confirmPassword: string) {
    setConfirmPassword(confirmPassword);
    setErrors((state) => ({
      ...state,
      confirmPassword:
        confirmPassword === password ? undefined : confirmPasswordErrorMessage,
    }));
  }

  async function onSubmit() {
    if (loading) {
      return;
    }

    setShowErrors(true);
    setErrorMessage('');

    if (errors.password || errors.confirmPassword) {
      return;
    }

    try {
      setLoading(true);
      await accountsService.resetPassword(token, password);
      setSuccessfullySubmitted(true);
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
        {!successfullySubmitted ? (
          <ResetPasswordCard
            password={password}
            confirmPassword={confirmPassword}
            errors={showErrors ? errors : undefined}
            errorMessage={errorMessage}
            loading={loading}
            onPasswordChange={onPasswordChange}
            onConfirmPasswordChange={onConfirmPasswordChange}
            onSubmit={onSubmit}
          />
        ) : (
          <ResetPasswordSuccessCard
            countdown={redirectCountdownString}
            onRedirect={redirectToLogin}
          />
        )}
      </Container>
    </div>
  );
}
