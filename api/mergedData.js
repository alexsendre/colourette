import { getSinglePalette } from './paletteData';
import { getPalettedColors } from './palettedColorsData';

const viewPaletteColors = (paletteFbK) => new Promise((resolve, reject) => {
  getSinglePalette(paletteFbK)
    .then((paletteObj) => {
      getPalettedColors(paletteObj.fbK)
        .then((colorObj) => {
          resolve({ colorObj, ...paletteObj });
        });
    }).catch((error) => reject(error));
});

export default viewPaletteColors;
