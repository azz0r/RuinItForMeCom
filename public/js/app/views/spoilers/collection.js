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
      itemView: Item,
      itemViewContainer: "#collectionBody",
      collection: new Collection()


    })
  })