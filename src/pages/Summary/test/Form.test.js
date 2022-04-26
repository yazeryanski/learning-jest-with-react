import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
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

    userEvent.click(checkbox);

    expect( checkbox ).toBeChecked();
    expect( button ).toBeEnabled();
  });

  test('if chekbox is unchekced the button is disabled', () => { 
    render(<Form />);
    const checkbox = screen.getByRole('policy');
    const button = screen.getByRole('submit');

    userEvent.click(checkbox);
    userEvent.click(checkbox);
    
    expect( checkbox ).not.toBeChecked();
    expect( button ).toBeDisabled();
  });
});

describe('Showing popover when user hovers in the term link', () => {
  test('should be hidden initialy', () => { 
    render(<Form />);
    const popover = screen.queryByRole('popover');
    expect(popover).not.toBeInTheDocument();
  });

  test('should show popover on hovering in the terms link', async () => {
    render(<Form />);
    const termLink = screen.getByRole('term');
    userEvent.hover(termLink);

    const popover = screen.getByRole('popover');
    expect(popover).toBeInTheDocument();

    userEvent.unhover(termLink);
    await waitForElementToBeRemoved( () => screen.queryByRole('popover') );
  });
});