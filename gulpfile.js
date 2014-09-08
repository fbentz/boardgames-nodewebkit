'use strict';
var gulp = require('gulp');
var less = require('gulp-less');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var hbsfy = require('hbsfy');
var opt = {
  build: 'build',
  app: {
    src: './src/app/js/app.js',
    dest: 'app.js'
  },

  copy: [
    './src/app/webkit/**/*.*'
  ],

  vendors: 'vendors.js',

  jsAssets: [
    '/src/vendors/bootstrap/dist/js/**/*.*',
  ],

  fontAssets: [
    'src/vendors/bootstrap/dist/fonts/*'
  ]
};

gulp.task('assets', ['assets:fonts']);

gulp.task('copy', function() {
  return gulp.src(opt.copy)
    .pipe(gulp.dest(opt.build + '/js'));
});

gulp.task("assets:fonts", function() {
  return gulp.src(opt.fontAssets)
    .pipe(gulp.dest(opt.build + '/fonts'));
});

gulp.task('build:less', function() {
  return gulp.src('./src/app/less/**/*.less')
    .pipe(less({
      paths: ['./src/vendors/bootstrap/less']
    }))
    .pipe(gulp.dest(opt.build + '/css'));
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
    .external('lodash')
    .external('handlebars')
    .require('./src/vendors/bootstrap/dist/js/bootstrap.js', {
      expose: 'bootstrap'
    })
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
    .require('lodash')
    .require('handlebars')
    .add('jquery')
    .bundle()
    .pipe(source(opt.vendors))
    .pipe(gulp.dest(opt.build + '/js'));

  return vendorStream;
});

gulp.task('watch', function() {
  gulp.watch(opt.jsAssets, ['build:js']);
});

gulp.task('default', ['build:js', 'build:less' , 'assets', 'copy']);
gulp.task('dev', ['build:js', 'assets']);
