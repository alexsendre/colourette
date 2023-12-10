import { getProjectPalettes, getSingleProject } from './projectData';

const viewProjectPalettes = (projectFbK) => new Promise((resolve, reject) => {
  Promise.all([getSingleProject(projectFbK), getProjectPalettes(projectFbK)])
    .then(([prObj, projPaletteArr]) => {
      resolve({ ...prObj, palettes: projPaletteArr });
    }).catch((error) => reject(error));
});

export default viewProjectPalettes;
