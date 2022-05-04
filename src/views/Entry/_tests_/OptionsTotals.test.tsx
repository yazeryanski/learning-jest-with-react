import React from 'react';
import { render, screen, within, waitFor } from 'utils/testUtils/RenderWithOrderContext';
import userEvent from '@testing-library/user-event';
import formatCurrency from 'utils/FormatCurency';
import {pricePerItem} from 'utils/Constants';
import Options from 'components/Options/Options';

test('On Changing scoops count it changes the total price too', async () => {
  render(<Options type="scoops"/>);

  const scoopsTotal = screen.getByRole('total');
  const scoops = await screen.findAllByRole('scoop-card');
  // At first render the total amount is 0
  expect(scoopsTotal).toHaveTextContent('$0.00');

  // Setting count of each scoop to 1
  for (let i = 0; i < scoops.length; i++) {
    const item = scoops[i];
    const counter = within(item).getByRole('counter');
    const currentCount = i + 1;
    
    userEvent.clear(counter);
    // Typing 1
    userEvent.type(counter, '1');
   
    await waitFor ( () => {
      expect(scoopsTotal).toHaveTextContent( formatCurrency(pricePerItem.scoops * currentCount) );
    });
  }
});

test('Checking and unchecking of the topping changes the total price', async () => {
  render(<Options type="toppings"/>);

  const toppingsTotal = screen.getByRole('total');
  const toppings = await screen.findAllByRole('topping-card');
  
  // At first render the total amount is 0
  expect(toppingsTotal).toHaveTextContent('$0.00');

  for (let i = 0; i < toppings.length; i++) {
    const item = toppings[i];
    const checkbox = within(item).getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    
    await waitFor ( () => {
      expect(toppingsTotal).toHaveTextContent( formatCurrency(pricePerItem.toppings * (i + 1)) );
    });
  }

  for (let i = 0; i < toppings.length; i++) {
    const item = toppings[i];
    const checkbox = within(item).getByRole('checkbox');
    expect(checkbox).toBeChecked();
    
    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    
    await waitFor ( () => {
      expect(toppingsTotal).toHaveTextContent( formatCurrency(pricePerItem.toppings * (toppings.length - i)) );
    });
  }
});