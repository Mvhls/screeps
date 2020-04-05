module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({ 
      pkg: grunt.file.readJSON('package.json'), 
      uglify: { 
          options: { 
              compress: {} 
          }, 
          applib: { 
              src: [ 
              'app/modules/roleHarvester.js', 
              'app/modules/program.js',  
              ], 
              dest: 'dist/modules.js' 
          } 
      } 
  }); 

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
};