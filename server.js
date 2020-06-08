const express = require('express');
const path = require('path');
const routers = require('./routes/index'); // default to index.js
const SpeakerService = require('./services/SpeakerService');
const FeedbackService = require('./services/FeedbackService');

const speakerService = new SpeakerService('./data/speakers.json');
const feedbackService = new FeedbackService('./data/feedback.json');

const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'static')));

app.use(
  '/',
  routers({
    speakerService,
    feedbackService,
  })
);

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
