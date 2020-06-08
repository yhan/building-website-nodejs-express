const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/feedaback', (req, res) => {
    return res.send('Feedback');
  });

  router.post('/', (req, res) => {
      return res.send(`Feedback form posted`);
  });

  return router;
};
