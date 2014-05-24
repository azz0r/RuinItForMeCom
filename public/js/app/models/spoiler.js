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
      },


      getCategoryOptions: function() {
        return {
          'other': {id: 0, humanised: 'Other'},
          'game': {id: 5, humanised: 'Game'},
          'movie': {id: 10, humanised: 'Movie'},
          'book': {id: 15, humanised: 'Book'},
          'tvshow': {id: 20, humanised: 'TV Show'}
        }
      },


      getPlatformOptions: function() {
        return {
          'na': {id: 0, humanised: 'None'},
          'playstation4': {id: 5, humanised: 'Playstation 4'},
          'playstation3': {id: 10, humanised: 'Playstation 3'},
          'playstation2': {id: 15, humanised: 'Playstation 2'},
          'playstation1': {id: 20, humanised: 'Playstation 1'},

          'xboxone': {id: 25, humanised: 'Xbox One'},
          'xbox360': {id: 30, humanised: 'Xbox 360'},

          'nintendowiiu': {id: 35, humanised: 'Nintendo Wii U'},
          'nintendowii': {id: 40, humanised: 'Nintendo Wii'},
          'nintendogamecube': {id: 45, humanised: 'Nintendo Gamecube'},
          'nintendo64': {id: 50, humanised: 'Nintendo 64'},

          'nintendods': {id: 55, humanised: 'Nintendo DS'},
          'nintendogameboy': {id: 60, humanised: 'Nintendo Gameboy'},

          'pspvita': {id: 65, humanised: 'PSP Vita'},
          'psp': {id: 70, humanised: 'PSP'},

          'mac': {id: 75, humanised: 'Mac'},
          'pc': {id: 80, humanised: 'PC'}
        }
      },


    });
  })