const express = require('express');
const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = (speakerService, feedbackService) => {
  router.get('/', (request, response) => {

    // dev test: session is per user
    // effect of use cookie session in `server.js`
    if (!request.session.myCounter) {
      request.session.myCounter = 0;
    }
    request.session.myCounter += 1;
    console.log(`Nb of visit: ${request.session.myCounter}`);

    response.render('pages/index', { pageTitle: 'Welcome' });
    
  });

  router.use('/speakers', speakersRoute(speakerService));
  router.use('/feedback', feedbackRoute(feedbackService));

  return router;
};
