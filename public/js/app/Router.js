define(['marionette', 'app/Controller'],
  function(marionette, Controller) {
    'use strict'
    return marionette.AppRouter.extend({
      appRoutes: {
        '': 'landing',
        debug: 'debug',
        newest: 'newest',
        trending: 'trending',
        mostViewed: 'mostViewed',
        createSpoiler: 'createSpoiler',
        contactUs: 'contactUs'
      },
      controller: Controller
    })
  })
