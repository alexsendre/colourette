const endpoint = 'https://colourette-default-rtdb.firebaseio.com';

const createPalettedColors = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/palettedColors.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updatePalettedColors = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/palettedColors/${payload.fbK}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getPalettedColors = (fbK) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/palettedColors.json?orderBy="paletteId"&equalTo="${fbK}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    }).catch(reject);
});

export { createPalettedColors, updatePalettedColors, getPalettedColors };
