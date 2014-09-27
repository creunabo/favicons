/*
 * grunt-favicons-tasks
 * https://github.com/creunabo/favicons
 *
 * Copyright (c) 2014 Bo Petersen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    // load all npm grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                '*.js'
            ],
            options: {
                jshintrc: '.jshintrc',
                    reporter: require('jshint-stylish')
                }
        },

        favicons: {

            console.log("im running as a grunt module");
        }
    };

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');
    
    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['favicons']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);
    grunt.registerTask('compile', ['jshint', 'test']);

};
