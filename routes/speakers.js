const express = require('express');

const router = express.Router();

module.exports = (speakerSvc) => {

  router.get('/', async (req, res) => {
    const speakers = await speakerSvc.getList();

    return res.json(speakers);
  });

  router.get('/:shortname', (req, res) => {
    return res.send(`Detail page of speaker ${req.params.shortname}`);
  });

  return router;
};
