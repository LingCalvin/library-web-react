import { Container, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import LoginCard from './login-card';
import validator from 'validator';
import { LoginFormErrors } from './login-form';
import authService from '../common/services/auth.service';
import useSearchParam from '../common/hooks/useSearchParam';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

const emailErrorMessage = 'Invalid email';
const passwordErrorMessage = 'This field is required';

export default function Login() {
  const history = useHistory();
  const nextPage = useSearchParam('continue');
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<LoginFormErrors>({
    email: emailErrorMessage,
    password: passwordErrorMessage,
  });
  const [showErrors, setShowErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  function onEmailChange(email: string) {
    setEmail(email);
    setErrors((state) => ({
      ...state,
      email: validator.isEmail(email) ? undefined : 'Invalid email',
    }));
  }

  function onPasswordChange(password: string) {
    setPassword(password);
    setErrors((state) => ({
      ...state,
      password: !validator.isEmpty(password)
        ? undefined
        : 'This field is required',
    }));
  }

  async function onSubmit() {
    if (loading) {
      return;
    }

    setShowErrors(true);
    setErrorMessage('');

    if (errors.email || errors.password) {
      return;
    }

    try {
      setLoading(true);
      await authService.login(email, password);
      if (nextPage) {
        history.replace(nextPage);
      } else {
        history.replace('/');
      }
    } catch (e) {
      if (e.response?.status === 401) {
        setErrorMessage('Invalid credentials');
      } else if (e.response?.data?.message) {
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
        <LoginCard
          email={email}
          password={password}
          errors={showErrors ? errors : undefined}
          errorMessage={errorMessage}
          loading={loading}
          onEmailChange={onEmailChange}
          onPasswordChange={onPasswordChange}
          onSubmit={onSubmit}
        />
      </Container>
    </div>
  );
}
