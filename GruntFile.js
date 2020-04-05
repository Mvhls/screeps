module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      main: {
        src: [
          'app/main.js',
        ],
        dest: 'dist/main.js',
      },
      modules: {
        src: [
          'app/modules/roleHarvester.js',
          'app/modules/loader.js'],
        dest: 'dist/modules.js',
      }
    },
  });

  // Default task(s).
  // grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', ['concat']);
  // load concat
  grunt.loadNpmTasks('grunt-contrib-concat');
  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
};