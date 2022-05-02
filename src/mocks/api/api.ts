// src/mocks/handlers.js
import { rest } from 'msw';
import { scoops, toppings } from './_fakeData';

export const BASE_PATH = 'http://localhost:3030';

const getScoops = rest.get(`${BASE_PATH}/scoops`, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(scoops),
  );
});

const getToppings = rest.get(`${BASE_PATH}/toppings`, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(toppings),
  );
});

export default [getScoops, getToppings];