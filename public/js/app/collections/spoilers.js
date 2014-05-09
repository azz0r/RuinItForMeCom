define(["baseCollection", "app/models/spoiler"],
  function(baseCollection, Model) {
    return baseCollection.extend({
      model: Model,
      url: "spoiler"
    });
  })