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
    .catch((error) => {
      response.status(500).json({ error });
    })
});

app.get('/api/v1/projects/:name', (request, response) => {
  database('projects').where('name', request.params.name).select()
    .then((projects) => {
      if (projects.length) {
        response.status(200).json(projects);
      } else {
        response.status(404).json({
          error: `Could not find project with name ${request.params.name}`
        });
      }
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
})

app.post('/api/v1/projects', (request, response) => {
  const project = request.body;

  for (let requiredParameter of ['name']) {
    if(!project[requiredParameter]) {
      return response.status(422).send({ error: `Expected format: { name: <String> }. You're missing a "${requiredParameter}" property.` });
    }
  };

  database('projects').insert(project, 'id')
    .then((paper) => {
      response.status(201).json({ id: project[0] });
    })
    .catch((error) => {
      response.status(500).json({ error });
    })
});

app.get('/api/v1/palettes', (request, response) => {
  database('palettes').select()
    .then((palettes) => {
      response.status(200).json(palettes);
    })
    .catch((error) => {
      response.status(500).json({ error });
    })
})

app.post('/api/v1/palettes', (request, response) => {
  // post new palette
});

app.delete('/api/v1/palettes', (request, response) => {
  // delete palette
});
