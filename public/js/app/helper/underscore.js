String.prototype.capitalize = function () {
  return this.replace(/^./, function (char) {
    return char.toUpperCase();
  });
};
Storage.prototype.setObject = function(key, value) {
  this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
  var value = this.getItem(key);
  return value && JSON.parse(value);
}


define(["underscore"], function(_) {


  return _.mixin({


    print_r: function(o){
      return JSON.stringify(o,null,'\t').replace(/\n/g,'<br>').replace(/\t/g,'&nbsp;&nbsp;&nbsp;');
    },


    nl2br: function(str) {
      return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br />' + '$2');
    },


    isSet: function (stringName) {
      try {
        eval(stringName);
      } catch (error) {
        if (error instanceof ReferenceError)
          return false;
      }

      return true;
    },


    playSound: function () {
      this.audioElement = document.createElement('audio');
      this.audioElement.setAttribute('src', '/sounds/update.mp3');
      this.audioElement.load()
      this.audioElement.play();
    },


    inArray: function(item,arr) {
      if(!arr) {
        return false;
      } else {
        for (var p=0;p<arr.length;p++) {
          if (item == arr[p]) {
            return true;
          }
        }
        return false;
      }
    },


    // look over an object and ensure any nulls get removed
    cleanNullFieldsFromObject: function(object) {
      for(var f in object) {
        if(object[f] == null || object[f] == "") {
          delete object[f];
        }
      }
      return object;
    },


    inArray: function(item,arr) {
      if(!arr) {
        return false;
      } else {
        for (var p=0;p<arr.length;p++) {
          if (item == arr[p]) {
            return true;
          }
        }
        return false;
      }
    },


    merge: function(target, source) {

      /* Merges two (or more) objects,
       giving the last one precedence */

      if ( typeof target !== 'object' ) {
        target = {};
      }

      for (var property in source) {
        if ( source.hasOwnProperty(property) ) {
          var sourceProperty = source[ property ];

          if ( typeof sourceProperty === 'object' ) {
            target[ property ] = util.merge( target[ property ], sourceProperty );
            continue;
          }
          target[ property ] = sourceProperty;
        }
      }

      for (var a = 2, l = arguments.length; a < l; a++) {
        merge(target, arguments[a]);
      }

      return target;
    }

  })
})


