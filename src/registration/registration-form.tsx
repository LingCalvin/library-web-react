import { Box, Button, Grid, makeStyles, TextField } from '@material-ui/core';
import React from 'react';

const variant = 'outlined';

export interface RegistrationFormProps {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  repeatPassword: string;
  firstNameError?: string;
  lastNameError?: string;
  emailError?: string;
  phoneNumberError?: string;
  passwordError?: string;
  repeatPasswordError?: string;
  onFirstNameChange: (firstName: string) => void;
  onMiddleNameChange: (middleName: string) => void;
  onLastNameChange: (lastName: string) => void;
  onEmailChange: (email: string) => void;
  onPhoneNumberChange: (phoneNumber: string) => void;
  onPasswordChange: (password: string) => void;
  onRepeatPasswordChange: (repeatPassword: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const useStyles = makeStyles((theme) => ({
  form: {
    // Prevent horizontal overflow caused by negative margins used in Grid
    padding: theme.spacing(3),
  },
}));

export default function RegistrationForm({
  firstName,
  middleName,
  lastName,
  email,
  phoneNumber,
  password,
  repeatPassword,
  firstNameError,
  lastNameError,
  emailError,
  phoneNumberError,
  passwordError,
  repeatPasswordError,
  onFirstNameChange,
  onMiddleNameChange,
  onLastNameChange,
  onEmailChange,
  onPasswordChange,
  onPhoneNumberChange,
  onRepeatPasswordChange,
  onSubmit,
}: RegistrationFormProps) {
  const classes = useStyles();
  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <Grid container spacing={4}>
        <Grid container item spacing={2}>
          <Grid item xs={12} sm={5}>
            <TextField
              label="First name"
              value={firstName}
              error={!!firstNameError}
              helperText={firstNameError}
              onChange={(e) => onFirstNameChange(e.target.value)}
              variant={variant}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              label="Middle name"
              value={middleName}
              onChange={(e) => onMiddleNameChange(e.target.value)}
              variant={variant}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              label="Last name"
              value={lastName}
              error={!!lastNameError}
              helperText={lastNameError}
              onChange={(e) => onLastNameChange(e.target.value)}
              variant={variant}
              fullWidth
              required
            />
          </Grid>
        </Grid>
        <Grid container item spacing={2}>
          <Grid item xs={12} sm={8}>
            <TextField
              label="Email"
              value={email}
              error={!!emailError}
              helperText={emailError}
              onChange={(e) => onEmailChange(e.target.value)}
              variant={variant}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Phone number"
              value={phoneNumber}
              error={!!phoneNumberError}
              type="tel"
              helperText={phoneNumberError}
              onChange={(e) => onPhoneNumberChange(e.target.value)}
              variant={variant}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container item spacing={2}>
          <Grid item xs={12} sm>
            <TextField
              label="Password"
              value={password}
              error={!!passwordError}
              helperText={passwordError}
              type="password"
              onChange={(e) => onPasswordChange(e.target.value)}
              variant={variant}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm>
            <TextField
              label="Repeat password"
              value={repeatPassword}
              error={!!repeatPasswordError}
              helperText={repeatPasswordError}
              type="password"
              onChange={(e) => onRepeatPasswordChange(e.target.value)}
              variant={variant}
              fullWidth
              required
            />
          </Grid>
        </Grid>
        <Grid container item xs={12} sm>
          <Box display="flex" justifyContent="flex-end" width="100%">
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}
