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
                dest: 'build/common.js'
            }
        },
        uglify: {
            options: {
            },
            dist: {
                files: {
                    'build/release.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'styles',
                src: ['*.css', '!*.min.css'],
                dest: 'build/',
                ext: '.min.css'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};