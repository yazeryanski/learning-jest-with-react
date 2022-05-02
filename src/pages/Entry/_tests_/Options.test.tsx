import { render, screen, within, waitFor } from 'utils/testUtils/RenderWithOrderContext';
import userEvent from '@testing-library/user-event';
import Options from '../Options/Options';
import React from 'react';
import formatCurrency from 'utils/FormatCurency';
import {pricePerItem} from 'utils/Constants';

test('Displays images for each scoop option', async () => {
  render(<Options type="scoops"/>);

  // Find images
  await waitFor( async ()=> {
    const scoopImages = await screen.findAllByRole<HTMLImageElement>('img', { name: /scoops$/i });
    expect(scoopImages).toHaveLength(2);
  
    const altText = scoopImages.map( ( el:HTMLImageElement ) => el.alt );
    expect(altText).toEqual(['Chocolate scoops', 'Vanilla scoops']);
  });

});

test('Displays images for each topping option', async () => {
  render(<Options type="toppings"/> );

  // Find images
  await waitFor( async ()=> {
    const toppingImages = await screen.findAllByRole<HTMLImageElement>('img', { name: /toppings$/i });
    expect(toppingImages).toHaveLength(4);
  
    const altText = toppingImages.map( ( el:HTMLImageElement ) => el.alt );
    expect(altText).toEqual([
      'M&Ms toppings',
      'Hot fudge toppings',
      'Peanut butter cups toppings',
      'Gummi bears toppings',
    ]);
  });
});

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