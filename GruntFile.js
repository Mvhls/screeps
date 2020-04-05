module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          'app/main.js',
          'app/modules/role.builder.js', 
          'app/modules/role.harvester.js',
          'app/modules/role.upgrader.js'
        ],
        dest: 'dist/built.js',
      },
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