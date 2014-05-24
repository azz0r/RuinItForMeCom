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
        return _.find(this.getCategoryOptions(),
          function(category) {return id == category.id }
        );
      },


      getPlatformById: function(id) {
        return _.find(this.getPlatformOptions(),
          function(platform) {return id == platform.id }
        );
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
          'other': {id: 0, humanised: 'Other', icon: 'ion-help'},
          'game': {id: 5, humanised: 'Game', icon: 'ion-game-controller-b'},
          'movie': {id: 10, humanised: 'Movie', icon: 'ion-film-marker'},
          'book': {id: 15, humanised: 'Book', icon: 'ion-android-book'},
          'tvshow': {id: 20, humanised: 'TV Show', icon: 'ion-monitor'}
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