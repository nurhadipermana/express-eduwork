const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  // res.send('<h1>Ini adalah Halaman About</h1>');
  res.sendFile('./about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
  // res.send('<h1>Ini adalah Halaman Contact</h1>');
  res.sendFile('./contact.html', { root: __dirname });
});

app.use('/', (req, res) => {
  res.status('404');
  res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});