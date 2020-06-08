const express = require('express');
const speakerRouter = require('./speakers');
const feedbackRouter = require('./feedback');

const router = express.Router();

module.exports = (speakerService, feedbackService) => {
  router.get('/', (req, res) => {
    res.render('pages/index', { pageTitle: 'Hello world' });
  });

  router.use('/speakers', speakerRouter(speakerService));
  router.use('/feedback', feedbackRouter(feedbackService));
  return router;
};
