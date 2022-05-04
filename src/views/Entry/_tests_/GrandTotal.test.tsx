import React from 'react';
import { render, screen, within, waitFor, act } from 'utils/testUtils/RenderWithOrderContext';
import userEvent from '@testing-library/user-event';
import formatCurrency from 'utils/FormatCurency';
import {pricePerItem} from 'utils/Constants';
import Entry from '../Entry';

describe('Testing Grandtotal', () => {
  test('Grandtotal must be 0 at start', () => {
    render(<Entry />);
    const grandTotal = screen.getByRole('grand-total');

    expect( grandTotal ).toHaveTextContent( formatCurrency( 0 ) );
  });

  test('Changing Grandtotal when selecting scoops', async () => {
    render(<Entry />);
    const grandTotal = screen.getByRole('grand-total');
    const scoops = await screen.findAllByRole('scoop-card');
    const firstScoopsCounter = within( scoops[0] ).getByRole('counter');
    
    await act( async () => await userEvent.clear(firstScoopsCounter) );
    await act( async () => await userEvent.type(firstScoopsCounter, '2') );

    await waitFor( () => expect(grandTotal).toHaveTextContent( formatCurrency(2 * pricePerItem.scoops) ) );
  });

  test('Changing Grandtotal when selecting toppings', async () => {
    render(<Entry />);
    const grandTotal = screen.getByRole('grand-total');
    const toppings = await screen.findAllByRole('topping-card');
    const firstToppingCheckbox = within( toppings[0] ).getByRole('checkbox');

    await act( async () => await userEvent.click(firstToppingCheckbox) );
    expect(firstToppingCheckbox).toBeChecked();

    await waitFor( () => expect(grandTotal).toHaveTextContent( formatCurrency(1 * pricePerItem.toppings) ) );
  });

});