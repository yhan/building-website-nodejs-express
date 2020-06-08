const express = require('express');
const speakerRouter = require('./speakers');
const feedbackRouter = require('./feedback');

const router = express.Router();

module.exports = (params) => {
  router.get('/', (req, res) => {
    res.render('pages/index', { pageTitle: 'Hello world' });
  });

  const {speakerService, feedbackService } = params;

  router.use('/speakers', speakerRouter(speakerService));
  router.use('/feedback', feedbackRouter(feedbackService));
  return router;
};
