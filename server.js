const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(express.static('public'));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);

app.locals.title = 'Palette Picker';
app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

app.get('/api/v1/projects', (request, response) => {
  database('projects').select()
    .then((projects) =>{
      response.status(200).json(projects);
    })
    .catch((error => {
      response.status(500).json({ error });
    }))
});

app.post('/api/v1/projects', (request, response) => {
  // post new project
});

app.get('/api/v1/palettes', (request, response) => {
  // get palettes
})

app.post('/api/v1/palettes', (request, response) => {
  // post new palette
});

app.delete('/api/v1/palettes', (request, response) => {
  // delete palette
});
