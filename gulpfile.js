// Gulp dependencies
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var livereload = require('gulp-livereload');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');

var handleError = require('./gulp/handleError');

/** 
  Use Browserify to bundle up our tests.

  gulp test --watch --tests './tests/checkboxWithLabel-test.js'

  Thanks to - http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/ 
*/
gulp.task('test', function () {
    var componentToTestPath = gutil.env.tests;
    var bundler = browserify(componentToTestPath, watchify.args);

    if(gutil.env.watch) {
        livereload.listen();
        bundler = watchify(bundler);
    }

    bundler.transform(reactify);

    var rebundle = function() {
        bundler.bundle()
            .on('error', handleError('Browserify'))
            .pipe(source(componentToTestPath))
            .pipe(gulp.dest('./.tmp/'))
            .pipe(gulpif(gutil.env.watch, livereload()));
    };

    bundler.on('update', rebundle);

    return rebundle();
});