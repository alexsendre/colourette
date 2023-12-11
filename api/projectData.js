const endpoint = 'https://colourette-default-rtdb.firebaseio.com';

const createProject = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/projects.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getProject = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/projects.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    header: {
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

const getSingleProject = (fbK) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/projects/${fbK}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateProject = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/projects/${payload.fbK}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteProject = (fbK) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/projects/${fbK}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json)
    .then((data) => resolve(data))
    .catch(reject);
});

const getProjectPalettes = (fbK) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/palette.json?orderBy="project_id"&equalTo="${fbK}"`, {
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

export {
  getProject,
  createProject,
  getSingleProject,
  updateProject,
  deleteProject,
  getProjectPalettes,
};
