'use strict';
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var hbsfy = require('hbsfy');
var opt = {
  build: 'build',
  app: {
    src: './src/js/app.js',
    dest: 'app.js'
  },
  vendors: 'vendors.js',

  jsAssets: [
    'src/js/**/*.*',
  ],

  cssAssets: [
    'src/css/bootstrap.min.css',
    'src/css/bootstrap-theme.min.css'
  ],

  fontAssets: [
    'src/fonts/*'
  ]
};

gulp.task('assets', ['assets:css', 'assets:fonts']);

gulp.task("assets:css", function() {
  return gulp.src(opt.cssAssets)
    .pipe(gulp.dest(opt.build + '/css'));
});

gulp.task("assets:fonts", function() {
  return gulp.src(opt.fontAssets)
    .pipe(gulp.dest(opt.build + '/fonts'));
});

gulp.task('build:js', [
  'browserify:app',
  'browserify:vendors'
]);

gulp.task('browserify:app', ['browserify:vendors'], function() {
  var bundleStream = browserify(opt.app.src);

  bundleStream
    .external('pouchdb')
    .external('backbone')
    .external('jquery')
    .external('backbone-pouch')
    .transform('hbsfy')
    .bundle()
    .pipe(source(opt.app.dest))
    .pipe(gulp.dest(opt.build + '/js'));

  return bundleStream;

});

gulp.task('browserify:vendors', function() {
  var vendorStream = browserify();
  vendorStream
    .require('backbone')
    .require('backbone-pouch')
    .require('jquery')
    .require('pouchdb')
    .bundle()
    .pipe(source(opt.vendors))
    .pipe(gulp.dest(opt.build + '/js'));

  return vendorStream;
});

gulp.task('watch', function() {
  gulp.watch(opt.jsAssets, ['build:js']);
});

gulp.task('default', ['build:js', 'assets']);
