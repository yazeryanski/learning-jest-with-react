import React from 'react';
import { render, screen, waitFor } from 'utils/testUtils/RenderWithOrderContext';
import { rest } from 'msw';
import { server } from '../../../mocks/server';
import Entry from '../Entry';
import { BASE_URL } from 'api/api';

test('Show error alerts if the server is crashed', async () => {
  server.resetHandlers(...[
    rest.get(`${BASE_URL}scoops`, (req, res, ctx) => {
      return res(
        ctx.status(500, 'Server Error'),
      );
    }),
    rest.get(`${BASE_URL}toppings`, (req, res, ctx) => {
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
