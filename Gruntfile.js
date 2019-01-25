module.exports = grunt => {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'babel': {
      options: {
        sourceMap: false
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.js'],
          dest: 'dist/'
        }]
      } 
    }
  });

  grunt.loadNpmTasks('grunt-babel');

  grunt.registerTask('default', ['babel']);
}