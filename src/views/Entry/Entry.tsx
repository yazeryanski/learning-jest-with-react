import React from 'react';
import { Button } from 'react-bootstrap';
import Options from 'components/Options/Options';
import useOrderContext from 'contexts/Order/useOrderContext';
import formatCurrency from 'utils/FormatCurency';

export default function Entry() {
  const [{totals: {grandTotal, scoops, toppings}}] = useOrderContext();
  const isOrderInvalid = ( scoops !== formatCurrency(0) ) && ( toppings !== formatCurrency(0) );
  
  return (
    <>
      <Options type="scoops" className="mt-5" />
      <Options type="toppings" />
      <h2 className="fw-bold mt-5">Grand Total: <span role="grand-total">{grandTotal}</span></h2>

      <div className="mt-5">
        <Button variant="primary" role="order-button" disabled={!isOrderInvalid}>Make an order</Button>
      </div>
    </>
  );
}
