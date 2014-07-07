define([
  "text!app/templates/spoilers/collection.html",
  "app/collections/spoilers",
  "app/views/spoilers/item",
  "baseCollectionView"
],
  function(Template, Collection, Item, baseCollectionView) {
    "use strict"
    return baseCollectionView.extend({


      template: Template,
      childView: Item,
      childViewContainer: "#collectionBody",
      collection: new Collection()


    })
  })