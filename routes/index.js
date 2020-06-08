const express = require('express');
const speakerRouter = require('./speakers');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    res.render('pages/index', { pageTitle: 'Hello world' });
  });

  router.use('/speaker', speakerRouter());
  return router;
};
