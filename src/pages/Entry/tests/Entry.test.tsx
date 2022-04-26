import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { BASE_PATH } from '../../../mocks/api/api';
import { server } from '../../../mocks/server';
import Entry from '../Entry';

test('Show error alerts if the server is crashed', async () => {
  server.resetHandlers(...[
    rest.get(`${BASE_PATH}/scoops`, (req, res, ctx) => {
      return res(
        ctx.status(500, 'Server Error'),
      );
    }),
    rest.get(`${BASE_PATH}/toppics`, (req, res, ctx) => {
      return res(
        ctx.status(500, 'Server Error'),
      );
    })
  ]);


  render(<Entry />);
  await waitFor( async ()=> {
    const alerts = await screen.findAllByRole('alert');
    expect(alerts).toHaveLength(2);
  });  

});
