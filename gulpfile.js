// Gulp dependencies
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var livereload = require('gulp-livereload');
var gutil = require('gulp-util');

// Our React component that we will be testing
var componentToTestPath = './tests/checkboxWithLabel-test.js';

// Handle errors elegantly
function handleError(task) {
  return function(err) {
    gutil.log(gutil.colors.red(err));
    notify.onError(task + ' failed, check the logs..')(err);
  };
}

/** 
  Use Browserify to bundle up our tests
  We pass in `true` to start a Livereload server 
  Thanks to - http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/ 
*/
function scripts(watch) {
  var bundler = browserify(componentToTestPath, watchify.args);
  var rebundle;
  var stream;

  if(watch) bundler = watchify(bundler);

  bundler.transform(reactify);

  rebundle = function() {
    stream = bundler.bundle()
      .on('error', handleError('Browserify'))
      .pipe(source(componentToTestPath))
      .pipe(gulp.dest('./.tmp/'));
    
    if(watch) stream.pipe(livereload());
  };

  bundler.on('update', rebundle);

  return rebundle();
}

// Our default Gulp tasks
gulp.task('default', function() { scripts(false); });
gulp.task('watch', function() {
  livereload.listen();
  scripts(true);
});