define(["marionette", "jquery"],
  function(marionette, $) {
    "use strict"
    var app;
    app = new marionette.Application()
    app.addRegions({
      content: "#contentInner"
    });
    return app;
  })