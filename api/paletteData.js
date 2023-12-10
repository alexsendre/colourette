const endpoint = 'https://colourette-default-rtdb.firebaseio.com';

const getPalette = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/palette.json?orderBy="uid"&equalTo="${uid}"`, {
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

const getSinglePalette = (fbK) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/palette/${fbK}.json`, {
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
    })
    .catch(reject);
});

const createPalette = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/palette.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updatePalette = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/palette/${payload.fbK}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deletePalette = (fbK) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/palette/${fbK}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getPalette,
  getSinglePalette,
  createPalette,
  updatePalette,
  deletePalette,
};
