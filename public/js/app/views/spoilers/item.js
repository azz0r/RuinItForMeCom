define([
  "marionette",
  "text!app/templates/spoilers/item.html",
  "app/models/spoiler"
],
  function(Marionette, Template, Model) {
    "use strict"


    return Backbone.Marionette.ItemView.extend({
      template: Template,
      tagName: "tr",


      serializeData: function() {
        var model = new Model();
        return {
          model: this.model.toJSON(),
          options: {
            enabled: model.getEnabledOptions()
          }
        }
      }


    })
  })