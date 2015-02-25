'use strict';

module.exports = function(karma) {
  karma.set({

    frameworks: [ 'browserify', 'jasmine' ],

    files: [
      "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment.min.js",
      '__tests__/**/*.js'
    ],

    preprocessors: {
      '__tests__/**/*.js': [ 'browserify' ]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: karma.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // browserify configuration
    browserify: {
      debug: true,
      transform: [ 'browserify-shim' ],
      extensions: ['.js', '.jsx']
    }
  });
};
