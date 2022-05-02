import React from 'react';
import {render, RenderOptions} from '@testing-library/react';
import { OrderContextProvider } from '../../contexts/Order/Provider';

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, {wrapper: OrderContextProvider, ...options});

// re-export everything
export * from '@testing-library/react';

// override render method
export {customRender as render};