module.exports = function (grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: [
            'dist/*'
        ],
        sass: {
            dist: {
                options: {
                    noCache: true,
                    sourcemap: 'none',
                    style: 'expanded',
                    trace: true
                },
                files: {
                    'dist/css/<%= pkg.name %>.css': 'src/scss/apachan-dark-theme.scss'
                }
            }
        },
        postcss: {
            options: {
                failOnError: true,
                processors: [
                    require('postcss-will-change'),
                    require('autoprefixer')({ browsers: [
                        'last 2 Chrome versions',
                        'last 5 Firefox versions',
                        'last 2 Opera versions',
                        'last 2 Safari versions'
                    ] })
                ]
            },
            dist: {
                src: 'dist/css/*.css'
            }
        }
    });

    grunt.registerTask('default', [
        'clean',
        'sass',
        'postcss'
    ]);
};
