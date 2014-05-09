define([],
  function() {
    "use strict"
    return Backbone.Marionette.CompositeView.extend({


      collectionEvents: {
        'sync': 'hideLoading'
      },


      initialize: function(filter) {

        // set loading
        this.setLoading();

        // set it on the instance so onRender can access the filter data
        this.filter = filter;

        return this.triggerCollection();
      },


      triggerCollection: function() {

        //so we can access the instance inside
        var that = this;

        // feth the collection
        return this.collection.fetch({
          data: this.filter,
          error: function() {
            that.hideLoading();
            $('#errorHappened').removeClass('hide')
          }
        })
      },


      // hide the loading state
      hideLoading: function() {
        $('.loading-latch').removeClass('loading-active');
      },


      // set loading by appending to the latch
      setLoading: function() {
        $('.loading-latch').addClass('loading-active');
      }


    })
  })