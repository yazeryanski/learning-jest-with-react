import { BASE_URL } from 'api/api';
import { rest } from 'msw';
import { scoops, toppings } from './_fakeData';

const getScoops = rest.get(`${BASE_URL}scoops`, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(scoops),
  );
});

const getToppings = rest.get(`${BASE_URL}toppings`, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(toppings),
  );
});

export default [getScoops, getToppings];