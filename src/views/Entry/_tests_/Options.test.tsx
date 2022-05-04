import React from 'react';
import { render, screen } from 'utils/testUtils/RenderWithOrderContext';
import Options from 'components/Options/Options';

test('Displays images for each scoop option', async () => {
  render(<Options type="scoops"/>);

  // Find images
  const scoopImages = await screen.findAllByRole<HTMLImageElement>('img');
  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map( ( el:HTMLImageElement ) => el.alt );
  expect(altText).toEqual(['Chocolate scoops', 'Vanilla scoops']);
});

test('Displays images for each topping option', async () => {
  render(<Options type="toppings"/> );

  const toppingImages = await screen.findAllByRole<HTMLImageElement>('img');
  expect(toppingImages).toHaveLength(4);

  const altText = toppingImages.map( ( el:HTMLImageElement ) => el.alt );
  expect(altText).toEqual([
    'M&Ms toppings',
    'Hot fudge toppings',
    'Peanut butter cups toppings',
    'Gummi bears toppings',
  ]);
});
