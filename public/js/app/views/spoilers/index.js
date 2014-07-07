define([
  "text!app/templates/spoilers/index.html",
  'app/views/spoilers/collection'
],
  function(Template, CollectionView) {
    "use strict"

    return Backbone.Marionette.LayoutView.extend({


      template: Template,


      regions: {
        collectionLatch: '#collectionLatch'
      },


      renderCollection: function(options) {
        // render the post list
        this.collectionLatch.show(new CollectionView(options));
      },


      onRender: function () {

        this.filter = {};

        // render the collection
        this.renderCollection(this.filter);
      }


    })
  })