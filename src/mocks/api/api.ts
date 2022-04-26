// src/mocks/handlers.js
import { rest } from 'msw';
import { scoops } from './_fakeData';

const BASE_PATH = 'http://localhost:3030';

export default rest.get(`${BASE_PATH}/scoops`, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(scoops),
  );
});