import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('should visible helo react text', () => { 
  render(<App />);
  
  const text = screen.getByText('Unit testing');
  expect( text ).toHaveTextContent('Unit testing');
});