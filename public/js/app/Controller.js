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
      newest: function() {
        return require(["app/views/spoilers/index"], function(View) {
          return MyApp.content.show(new View())
        })
      },
      trending: function() {
        return require(["app/views/spoilers/index"], function(View) {
          return MyApp.content.show(new View())
        })
      },
      mostViewed: function() {
        return require(["app/views/spoilers/index"], function(View) {
          return MyApp.content.show(new View())
        })
      },
      contactUs: function() {
        return require(["app/views/spoilers/index"], function(View) {
          return MyApp.content.show(new View())
        })
      },
      createSpoiler: function() {
        return require(["app/views/spoilers/index"], function(View) {
          return MyApp.content.show(new View())
        })
      }
    }
  })
