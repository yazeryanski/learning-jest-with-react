import { render, screen, waitFor } from '@testing-library/react';
import Options from '../Options/Options';
import React from 'react';

test('Displays images for each scoop option', async () => {
  render(<Options type="scoops"/>);

  // Find images
  await waitFor( async () => {
    const scoopImages = await screen.findAllByRole<HTMLImageElement>('img', { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    const altText = scoopImages.map( ( el:HTMLImageElement ) => el.alt );
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
  });

});

test('Displays images for each topping option', async () => {
  render(<Options type="toppings"/> );

  // Find images
  await waitFor( async () => {
    const scoopImages = await screen.findAllByRole<HTMLImageElement>('img', { name: /topping$/i });
    expect(scoopImages).toHaveLength(4);

    const altText = scoopImages.map( ( el:HTMLImageElement ) => el.alt );
    expect(altText).toEqual([
      'M&Ms topping',
      'Hot fudge topping',
      'Peanut butter cups topping',
      'Gummi bears topping',
    ]);
  });
 
});
