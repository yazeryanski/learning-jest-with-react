import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Form from '../Form';

describe('Initial state testing', () => {
  test('should checbox be unchecked', () => { 
    render(<Form />);
    const elem = screen.getByRole('policy');

    expect( elem ).not.toBeChecked();
  });

  test('should button be disabled at first', () => {
    render(<Form />);
    const elem = screen.getByRole('submit');

    expect(elem).toBeDisabled();
  });
});

describe('Checkbox is controling the button', () => {
  test('if chekbox is chekced the button is enabled', () => { 
    render(<Form />);
    const checkbox = screen.getByRole('policy');
    const button = screen.getByRole('submit');

    fireEvent.click(checkbox);

    expect( checkbox ).toBeChecked();
    expect( button ).toBeEnabled();
  });

  test('if chekbox is unchekced the button is disabled', () => { 
    render(<Form />);
    const checkbox = screen.getByRole('policy');
    const button = screen.getByRole('submit');

    fireEvent.click(checkbox);
    fireEvent.click(checkbox);
    
    expect( checkbox ).not.toBeChecked();
    expect( button ).toBeDisabled();
  });

});