define(['marionette', 'app/Controller'],
  function(marionette, Controller) {
    'use strict'
    return marionette.AppRouter.extend({
      appRoutes: {
        '': 'landing',
        landing: 'landing',
        debug: 'debug',
        aboutUs: 'aboutUs'
      },
      controller: Controller
    })
  })
