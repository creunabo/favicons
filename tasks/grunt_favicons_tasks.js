'use strict';

var path = require('path'),
    fs = require('fs'),
    exec = require('child_process').exec,
    async = require('async'),
    cheerio = require('cheerio'),
    defaults = require('lodash.defaults'),
    mkdirp = require('mkdirp');

module.exports = function(grunt) {



    grunt.registerMultiTask('grunt_favicons_tasks', 'Make a shit load of different sizes and inject into your html in head secetion.',
        function() {


            console.log("im running favicons....");
        });
};
