


define(["marionette", "underscore", "text!app/templates/spoilers/form.html", "app/models/spoiler"],
  function(Marionette, _, Template, Model) {
    "use strict"
    return Backbone.Marionette.ItemView.extend({


      events: {
        "click #save": "onClickSave"
      },


      initialize: function(options) {

        // dont break if options is empty
        options = _.isEmpty(options) ? {} : options;

        this.model = new Model();
      },


      onClickSave: function(ev) {

        ev.preventDefault()

        console.log('on click save');


        this.model.on("invalid", function(model, error) {
          $('#'+error.name+'Error').removeClass('hide').html(error.error);
        });


        this.model.set({
          title: $('#title').val(),
          email: $('#email').val(),
          description: $('#description').val(),
          category: $('#category option:selected').val()
        }, {validate : true});

        if (this.model.isValid()) {
          return this.model.save({}, {
            success: function() {
              alert('success on save');
              //return window.location.hash = "newest";
            },
            error: function(request, error) {
              alert('error on save');
            }
          })
        }
      },


      render: function() {

        var html;

        html = _.template($(Template).html(), this.model.toJSON());
        this.$el.html(html);
        return this;
      }


    })
  })