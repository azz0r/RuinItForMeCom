module.exports = function (grunt) {
  grunt.initConfig({


    pkg: grunt.file.readJSON('package.json'),


    less: {
      targetname: {
        expand: true,
        cwd: 'public/css',
        src: ['*.less'],
        dest: 'public/css',
        ext: '.css'
      },
      options: {
        compress: true,
        yuicompress: true,
        optimization: 2
      }
    },


    watch: {
      files: "public/css/*",
      tasks: ["less"]
    },


  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-requirejs");
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');




  grunt.registerTask('default', ['less', 'watch']);


};