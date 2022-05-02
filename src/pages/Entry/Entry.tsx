import Options from 'components/Options/Options';
import useOrderContext from 'contexts/Order/useOrderContext';
import React from 'react';

export default function Entry() {
  const [{totals: {grandTotal}}] = useOrderContext();
  return (
    <>
      <Options type="toppings" />
      <Options type="scoops" className="mt-5" />
      <h2 className="fw-bold mt-5">Grand Total: <span role="grand-total">{grandTotal}</span></h2>
    </>
  );
}
