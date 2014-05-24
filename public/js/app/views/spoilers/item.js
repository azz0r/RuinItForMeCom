define([
  "marionette",
  "text!app/templates/spoilers/item.html",
  "app/models/spoiler"
],
  function(Marionette, Template, Model) {
    "use strict"


    return Backbone.Marionette.ItemView.extend({
      template: Template,
      tagName: 'div',
      className: 'spoiler',


      serializeData: function() {
        var model = new Model();
        return {
          model: this.model.toJSON(),
          category: this.model.getCategoryById(this.model.get('category')),
          platform: this.model.getPlatformById(this.model.get('platform'))
        }
      }


    })
  })