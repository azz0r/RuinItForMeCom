define(["baseCollection", "app/models/category"],
  function(baseCollection, Model) {
    return baseCollection.extend({
      model: Model,
      url: "category",

    });
  })