import React from 'react';
import { Container } from 'react-bootstrap';
import Options from './Options/Options';

export default function Entry() {
  return (
    <Container>
      <Options type="scoops" />
    </Container>
  );
}
