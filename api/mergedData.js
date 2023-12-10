import { deletePalette } from './paletteData';
import { getProjectPalettes, getSingleProject } from './projectData';

const viewProjectPalettes = (projectFbK) => new Promise((resolve, reject) => {
  Promise.all([getSingleProject(projectFbK), getProjectPalettes(projectFbK)])
    .then(([prObj, projPaletteArr]) => {
      resolve({ ...prObj, palettes: projPaletteArr });
    }).catch((error) => reject(error));
});

const deleteProjectPalettes = (paletteId) => new Promise((resolve, reject) => {
  getProjectPalettes(paletteId).then((palArr) => {
    const deletePalettesPromises = palArr.map((palette) => deletePalette(palette.fbK));

    Promise.all(deletePalettesPromises).then(resolve);
  }).catch((error) => reject(error));
});

export {
  viewProjectPalettes,
  deleteProjectPalettes,
};
