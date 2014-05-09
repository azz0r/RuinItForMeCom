require.config({
  paths: {
    backbone: "libs/backbone/backbone",
    marionette: "libs/backbone/marionette",
    modelBinder: "libs/backbone/modelBinder",
    queryParams: "libs/backbone/queryParams",
    underscore: "libs/underscore/underscore-min",
    jquery: "libs/jquery/jquery-1.9.0",
    jqueryUI: "libs/jquery/jquery-ui-1.10.3.custom",
    chosen: "libs/chosen/chosen.jquery.amd",
    bootstrap: "libs/bootstrap/bootstrap",
    tpl: "libs/require/tpl",
    text: "libs/require/text",

    quickview: "libs/quickview/quickview",

    baseModel: "app/models/base",
    baseCollection: "app/collections/base",
    baseCollectionView: "app/views/collection"
  },
  shim: {
    jquery: {
      exports: "jQuery"
    },
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["jquery", "underscore"],
      exports: "Backbone"
    },
    marionette: {
      deps: ["jquery", "underscore", "backbone"],
      exports: "Marionette"
    },
    bootstrap: ["jquery"]
  }
})

require(["app/App", "jquery", "backbone", "modelBinder", "app/Router", "quickview", "app/helper/underscore", "bootstrap"],
  function(app, $, Backbone, modelBinder, Router, QuickView, UnderscoreHelper, bootstrap) {
    "use strict"
    $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
      options.url = "proxy.php/" + options.url;
      return;
//      return console.log("url = ", options.url)
    })
    Backbone.emulateJSON = true;
    /* allow backbone collection to save the entire thing */
    Backbone.Collection.prototype.save = function (options) {
      Backbone.sync("create", this, options);
    };
    window.MyApp = app
    MyApp.start()
    new Router()
    return Backbone.history.start()
  })