const express = require('express');
const fs = require('fs');
const pug = require('pug');
const config = require('./config');

const { hostname, port } = config;
const app = express();
const json = JSON.parse(fs.readFileSync('data/students.json'));
const html = pug.renderFile('students.pug', { ...json });

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(html);
});

app.get('/test', (req, res) => {
  res.send('mmm');
});

app.delete('/api/v1/students/:id', (req, res) => {
  json.students = json.students.filter(student => student.id != req.body.id);
  res.redirect('/');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
