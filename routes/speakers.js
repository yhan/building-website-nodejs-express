const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/speakers', (req, res) => {
    return res.send('Speakers list');
  });

  router.get('/speakers/:shortname', (req, res) => {
      return res.send(`Detail page of speaker ${req.params.shortname}`);
  });

  return router;
};
