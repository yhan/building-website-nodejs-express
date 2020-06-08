const express = require('express');
const speakerRouter = require('./speakers');
const feedbackRouter = require('./feedback');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    res.render('pages/index', { pageTitle: 'Hello world' });
  });

  router.use('/speakers', speakerRouter());
  router.use('/feedback', feedbackRouter());
  return router;
};
