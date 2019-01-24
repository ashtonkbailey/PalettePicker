const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('port', process.env.PORT || 3000);

app.locals.title = 'Palette Picker';
app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
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
