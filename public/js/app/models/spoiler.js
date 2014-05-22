define(["baseModel"],
  function(baseModel) {
    return baseModel.extend({


      urlRoot: "spoiler",


      validate: function (attrs) {

        if (!attrs.title) {
          return {name: 'title', error: 'Please fill the title field.'};
        }
        if (!attrs.email) {
          return {name: 'email', error: 'Please fill the email field.'};
        }
        if (!attrs.description) {
          return {name: 'description', error: 'Please fill the description field.'};
        }
        if (!attrs.category) {
          return {name: 'category', error: 'Please fill the category field.'};
        }
      },


      getCategoryById: function(id) {
        switch (id) {
          case "0": default:
            return "Other";
          break;
          case "1":
            return "Game";
            break;
          case "2":
            return "Movie";
            break;
          case "3":
            return "Book";
            break;
          case "4":
            return "TV Show";
            break;
        }
      },

      validation: {
        title: {
          required: true,
          msg: 'title is required'
        },
        email: {
          required: true,
          msg: 'email is required'
        },
        description: {
          required: true,
          msg: 'description is required'
        },
        category: {
          required: true,
          msg: 'category is required'
        }
      }


    });
  })