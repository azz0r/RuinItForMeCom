define(["jquery", "app/helper/underscore"],
  function($, templateHelper) {
    "use strict"
    return {
      landing: function() {
        return require(["app/views/spoilers/index"], function(View) {
          return MyApp.content.show(new View())
        })
      },
      debug: function() {
        return require(["app/views/debug"], function(View) {
          return MyApp.content.show(new View())
        })
      },
      aboutUs: function() {
        return require(["app/views/general/aboutUs"], function(View) {
          return MyApp.content.show(new View())
        })
      }
    }
  })
