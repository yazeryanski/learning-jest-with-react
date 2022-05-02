import Options from 'components/Options/Options';
import React from 'react';

export default function Entry() {
  return (
    <>
      <Options type="toppings" className="mb-2 justify-content-center" />
      <Options type="scoops" className="mb-2 justify-content-center" />
    </>
  );
}
