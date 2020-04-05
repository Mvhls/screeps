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
                        'app/modules/constants.js',
                        'app/modules/creeps/creepFactory.js',
                        'app/modules/tasks/creepSpawner.js',
                        'app/modules/creeps/roleHarvester.js',
                        'app/modules/program.js', 
                    ], 
                    dest: 'dist/modules.js' 
                } 
            } 
    }); 

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
};