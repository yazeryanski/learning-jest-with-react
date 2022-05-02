import React from 'react';
import Options from './Options/Options';

export default function Entry() {
  return (
    <>
      <Options type="toppings" className="mb-2 justify-content-center" />
      <Options type="scoops" className="mb-2 justify-content-center" />
    </>
  );
}
