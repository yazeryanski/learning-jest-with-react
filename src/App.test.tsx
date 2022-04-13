import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('should visible helo react text', () => { 
  render(<App />);
  expect( screen.getByText('Hello React') ).toHaveTextContent('Hello React');
});