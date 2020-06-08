const express = require('express');
const path = require('path');
const routers = require('./routes/index'); // default to index.js

const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'static')));

app.use('/', routers());

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
