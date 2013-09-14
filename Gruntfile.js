/**
 * Grunt compile project
 * @author polax
 * @date: 14.09.13
 */
module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['scripts/lib/*.js', 'scripts/user/*.js'],
                dest: 'build/lib.js'
            }
        },
        uglify: {
            options: {
            },
            dist: {
                files: {
                    'build/build.min.js': ['<%= concat.dist.dest %>']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat', 'uglify']);
};