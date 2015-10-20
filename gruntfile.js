// Gruntfile.js
module.exports = function (grunt) {

    require('load-grunt-config')(grunt);
    grunt.registerTask('dev', ['jekyll', 'sass', 'concat', 'browserSync:dev', 'watch']);
    grunt.registerTask('build', ['jekyll', 'htmlmin', 'sass', 'cssnext', 'cssmin', 'concat', 'uglify', 'browserSync:build']);
    grunt.registerTask('deploy', ['rsync']);
};
