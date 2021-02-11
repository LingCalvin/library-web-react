import {
  Backdrop,
  CircularProgress,
  Typography,
  Link as MaterialLink,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import accountsService from '../common/services/accounts.service';

export default function VerifyEmail() {
  const { token } = useParams<{ token: string }>();
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(10);
  const [success, setSuccess] = useState(false);
  const countdownString = `${countdown} second${countdown === 1 ? '' : 's'}`;

  useEffect(() => {
    (async () => {
      try {
        await accountsService.verifyEmail(token);
        setSuccess(true);
      } catch (e) {
        setSuccess(false);
      } finally {
        setLoading(false);
      }
    })();
  }, [token]);

  useEffect(() => {
    if (!success) {
      return;
    }
    function decrementCountdown() {
      setCountdown((state) => state - 1);
    }
    const interval = setInterval(decrementCountdown, 1000);
    return () => clearInterval(interval);
  }, [success]);

  if (countdown <= 0) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Backdrop open={loading}>
        <CircularProgress />
      </Backdrop>
      {!loading && (
        <Typography>
          {success ? (
            <>
              Account activated. You will be redirected to the{' '}
              <MaterialLink component={Link} to="/login">
                login page
              </MaterialLink>{' '}
              in {countdownString}.
            </>
          ) : (
            'Could not activate account using provided token.'
          )}
        </Typography>
      )}
    </>
  );
}
