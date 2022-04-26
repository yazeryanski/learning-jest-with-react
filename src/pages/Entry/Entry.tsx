import React from 'react';
import { Container } from 'react-bootstrap';
import Options from './Options/Options';

export default function Entry() {
  return (
    <Container>
      <Options type="toppings" className="mb-2 justify-content-center" />
      <Options type="scoops" className="mb-2 justify-content-center" />
    </Container>
  );
}
