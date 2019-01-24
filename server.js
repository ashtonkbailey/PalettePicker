const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Running on localhost:3000');
});

app.get('/api/v1/projects', (request, response) => {
  // get projects
});

app.post('/api/v1/projects', (request, response) => {
  // post new project
});

app.post('/api/v1/palettes', (request, response) => {
  // post new palette
});

app.delete('/api/v1/palettes', (request, response) => {
  // delete palette
});
