import React from 'react';
import { Alert } from 'react-bootstrap';

interface Props {
  message?: string,
  [x: string]: unknown
}

const defaultMessage = 'Something went wrong. Please try again, later.';

export default function AlertBox({message = defaultMessage, ...restProps}: Props) {
  return (
    <Alert {...restProps} role="alert">
      {message}
    </Alert>
  );
}
