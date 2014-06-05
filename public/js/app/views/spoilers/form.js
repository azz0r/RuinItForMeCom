define([
  "marionette",
  "underscore",
  "text!app/templates/spoilers/form.html",
  "app/models/spoiler"],


  function(Marionette, _, Template, Model) {
    "use strict"


    return Backbone.Marionette.ItemView.extend({


      events: {
        "click #save": "onClickSave"
      },


      initialize: function(options) {
        this.model = new Model();
      },


      onClickSave: function(ev) {

        // prevent default form behaviour
        ev.preventDefault();

        // if the model is invalid then show the errors in the html
        this.model.on("invalid", function(model, error) {

          // hide all errors
          $('.alert.alert-danger').addClass('hide');

          //remove hide class from the error name and set the html to the error
          $('#'+error.name+'Error').removeClass('hide').html(error.error);
        });

        // set the model to ids in the form
        this.model.set({
            title: $('#title').val(),
            email: $('#email').val(),
            description: $('#description').val().replace(/\n/g, "<br />"),
            category: $('#category option:selected').val(),
            platform: $('#platform option:selected').val()
          },
          //validate the model
          {validate : true}
        );

        // if the model is valid then we save
        if (this.model.isValid()) {
          return this.model.save({}, {
            success: function() {
              return window.location.hash = "newest";
            },
            error: function(request, error) {
              alert('error on save, please try again');
            }
          })
        }
      },


      render: function() {
        var modelInstance = new Model();
        var html = _.template($(Template).html(), {
          platforms: modelInstance.getPlatformOptions(),
          categories: modelInstance.getCategoryOptions()
        });
        this.$el.html(html);
        return this;
      }


    })
  })