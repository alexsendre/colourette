import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getColor = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/color.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
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

const postColor = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/color.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getColor,
  getSingleColor,
  postColor,
};
