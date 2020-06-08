const express = require('express');
const path = require('path');
const router = require('./routes'); // default to index.js

const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'static')));

app.use("/", router());

app.get('/speakers', (req, res) => {
  res.sendfile(path.join(__dirname, 'static', 'speakers.html'));
});

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
