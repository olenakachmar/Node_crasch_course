const express = require('express');
const pug = require('pug');
const config = require('./config');
const json = require('./data/students.json')

const { hostname, port } = config;
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('students.pug', { ...json });
});

app.get('/test', (req, res) => {
  res.redirect('/');
});

app.delete('/api/v1/students/:id', (req, res) => {
  json.students = json.students.filter(student => student.id != req.params.id);
  console.log(`${req.baseUrl}/`);
  req.method = 'GET';
  res.redirect(303, '/');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
