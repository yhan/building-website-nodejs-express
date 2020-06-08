const express = require('express');

const router = express.Router();

module.exports =  (feedbackService) => {
  router.get('/', async (req, res) => {

    const f = await feedbackService.getList();
    return res.json(f);
  });

  router.post('/', (req, res) => {
      return res.send(`Feedback form posted`);
  });

  return router;
};
