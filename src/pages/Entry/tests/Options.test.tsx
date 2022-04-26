import { render, screen } from '@testing-library/react';
import Options from '../Options/Options';
import React from 'react';

test('Displays images for each scoop option', async () => {
  render(<Options type="scoops"/>);

  // Find images
  const scoopImages = await screen.findAllByRole<HTMLImageElement>('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map( ( el:HTMLImageElement ) => el.alt );
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});
