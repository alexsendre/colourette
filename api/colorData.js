const endpoint = 'https://colourette-default-rtdb.firebaseio.com';

const getColor = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/color.json`, {
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

const getSingleColor = (fbK) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/color/${fbK}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const postColor = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/color.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateColor = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/color/${payload.fbK}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getColor,
  getSingleColor,
  postColor,
  updateColor,
};
