import React from 'react';
import { render, screen, within } from 'utils/testUtils/RenderWithOrderContext';
import Entry from '../Entry';
import userEvent from '@testing-library/user-event';

describe('Make an Order button is disabled when not selected scoop or toppings', () => {
  test('initialy order button is disabled', async () => {
    render(<Entry />);
  
    const makeAnOrder = screen.getByRole('order-button');

    expect(makeAnOrder).toBeDisabled();
  });
  
  test('Selecting only scoops will not enable order button', async () => {
    render(<Entry />);
  
    const makeAnOrder = screen.getByRole('order-button');

    const scoop = (await screen.findAllByRole('scoop-card'))[0];
    const scoopCounter = within(scoop).getByRole('counter');
    
    await userEvent.clear(scoopCounter);
    await userEvent.type(scoopCounter, '1');

    expect(makeAnOrder).toBeDisabled();
  });


  test('Selecting only toppings will not enable order button', async () => {
    render(<Entry />);
  
    const makeAnOrder = screen.getByRole('order-button');

    const topping = (await screen.findAllByRole('topping-card'))[0];
    const toppingCheckbox = within(topping).getByRole('checkbox');

    await userEvent.click(toppingCheckbox);
    
    expect(makeAnOrder).toBeDisabled();
  });
});

