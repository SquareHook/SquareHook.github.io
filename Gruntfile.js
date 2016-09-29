module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', '*.js'],
      options: {
        globals: {
          jQuery: true
        },
        esversion: 6
      }
    },
    watch: {
      clear: {
        //clear terminal on any watch task. beauty.
        files: ['**/*'], //or be more specific
        tasks: ['clear']
      },
      files: ['*.js'],
      tasks: ['jshint']
    },
    "jsbeautifier": {
      files: ["*.js"],
      options: {}
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-clear');
  grunt.loadNpmTasks("grunt-jsbeautifier");
  grunt.registerTask('default', ['jshint', 'watch', 'jsbeautifier']);

};
