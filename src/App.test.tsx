import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

describe('Initial states check.', () => {
  test('The button must be enabled at first', () => {
    render(<App />);
    const elem = screen.getByRole('button', { name: 'Change color to blue' });

    expect(elem).toBeEnabled();
  });

  test('The checkbox must be unchecked at first', () => {
    render(<App />);
    const elem = screen.getByRole('checkbox');

    expect(elem).not.toBeChecked();
  });
});

describe('Changing the checkbox value must diable/enable button', () => {
  test('The button must be enabled at first', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'Change color to blue' });
    const checkbox = screen.getByRole('checkbox', {
      name: 'Disable the button',
    });

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(button).toBeDisabled();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(button).toBeEnabled();
  });
});
