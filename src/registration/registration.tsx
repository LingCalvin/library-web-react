import { Box, Container, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import validator from 'validator';
import usersService from '../common/services/users.service';
import RegistrationCard from './registration-card';
import RegistrationSuccessCard from './registration-success-card';

const requiredFieldError = 'This field is required';
const invalidEmailError = 'Please enter a valid email';
const invalidPhoneNumberError = 'Please enter a valid phone number';
const passwordMismatchError = 'Passwords do not match';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

export default function Registration() {
  const classes = useStyles();

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState<string>();
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [firstNameError, setFirstNameError] = useState(requiredFieldError);
  const [lastNameError, setLastNameError] = useState(requiredFieldError);
  const [emailError, setEmailError] = useState(invalidEmailError);
  const [phoneNumberError, setPhoneNumberError] = useState(
    invalidPhoneNumberError,
  );
  const [passwordError, setPasswordError] = useState(requiredFieldError);
  const [repeatPasswordError, setRepeatPasswordError] = useState('');

  const [showErrors, setShowErrors] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  function onFirstNameChange(value: string) {
    setFirstNameError(validator.isEmpty(value) ? requiredFieldError : '');
    setFirstName(value);
  }

  function onMiddleNameChange(value: string) {
    setMiddleName(value || undefined);
  }

  function onLastNameChange(value: string) {
    setLastNameError(validator.isEmpty(value) ? requiredFieldError : '');
    setLastName(value);
  }

  function onEmailChange(value: string) {
    setEmailError(validator.isEmail(value) ? '' : invalidEmailError);
    setEmail(value);
  }

  function onPhoneNumberChange(value: string) {
    setPhoneNumberError(
      !value || validator.isMobilePhone(value) ? '' : invalidPhoneNumberError,
    );
    setPhoneNumber(value || undefined);
  }

  function onPasswordChange(value: string) {
    setPasswordError(validator.isEmpty(value) ? requiredFieldError : '');
    setRepeatPasswordError(
      value !== repeatPassword ? passwordMismatchError : '',
    );
    setPassword(value);
  }

  function onRepeatPasswordChange(value: string) {
    setRepeatPasswordError(value !== password ? passwordMismatchError : '');
    setRepeatPassword(value);
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading) {
      return;
    }
    setErrorMessage('');
    const hasErrors =
      !!emailError ||
      !!passwordError ||
      !!repeatPasswordError ||
      !!firstNameError ||
      !!lastNameError ||
      !!phoneNumberError;
    setShowErrors(hasErrors);
    if (hasErrors) {
      return;
    }
    try {
      setLoading(true);
      await usersService.register({
        email,
        password,
        firstName,
        middleName,
        lastName,
        phoneNumber,
      });
      setSuccess(true);
    } catch (e) {
      if (e.response?.data?.message) {
        setErrorMessage(e.response.data.message);
      } else if (e.toString?.()) {
        setErrorMessage(e.toString());
      } else {
        setErrorMessage('An error has occurred.');
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box className={classes.root}>
      {success ? (
        <Container maxWidth="sm">
          <RegistrationSuccessCard />
        </Container>
      ) : (
        <Container maxWidth="md">
          <RegistrationCard
            onSubmit={onSubmit}
            firstName={firstName}
            middleName={middleName || ''}
            lastName={lastName}
            phoneNumber={phoneNumber || ''}
            email={email}
            password={password}
            repeatPassword={repeatPassword}
            firstNameError={showErrors ? firstNameError : undefined}
            lastNameError={showErrors ? lastNameError : undefined}
            phoneNumberError={showErrors ? phoneNumberError : undefined}
            emailError={showErrors ? emailError : undefined}
            passwordError={showErrors ? passwordError : undefined}
            repeatPasswordError={showErrors ? repeatPasswordError : undefined}
            onFirstNameChange={onFirstNameChange}
            onMiddleNameChange={onMiddleNameChange}
            onLastNameChange={onLastNameChange}
            onPhoneNumberChange={onPhoneNumberChange}
            onEmailChange={onEmailChange}
            onPasswordChange={onPasswordChange}
            onRepeatPasswordChange={onRepeatPasswordChange}
            errorMessage={errorMessage}
            loading={loading}
          />
        </Container>
      )}
    </Box>
  );
}
