var gulp = require('gulp');
var elixir = require('laravel-elixir');
var bower = require('main-bower-files');
var bowerNormalizer = require('gulp-bower-normalize');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var order = require('gulp-order');
var sass = require('gulp-sass');

var paths = {
  scripts: 'public/app/**/*.js',
  sass: 'resources/sass/styles.scss'
};


/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */



/*
 * Compile Assets
 */
 gulp.task('scripts', function() {
   return gulp.src('./public/app/**/*.js')
     .pipe(concat('app.js'))
     .pipe(gulp.dest('./public/js/'));
 });

 gulp.task('sass', function () {
   return gulp.src('./public/assets/sass/styles.scss')
     .pipe(sass().on('error', sass.logError))
     .pipe(gulp.dest('./public/css'));
 });

 gulp.task('sass:watch', function () {
   gulp.watch('./sass/**/*.scss', ['sass']);
 });

gulp.task('process-libs', function() {
  elixir(function(mix) {
    mix.scriptsIn('public/libs/', 'public/js/libs.js');
  });
});

gulp.task('bower', function() {
  gulp.src(bower(), {
      base: './bower_components'
    })
    .pipe(bowerNormalizer({
      bowerJson: './bower.json',
      flatten: true
    }))
    .pipe(gulp.dest('public/libs'))
});

gulp.task('move_fonts', function() {
  gulp.src('public/libs/fonts/**/*')
    .pipe(gulp.dest('public/build/fonts'));
});

gulp.task('clean', function() {
  gulp.src('public/libs', {
      read: false
    })
    .pipe(clean());
})

// Watch for changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['compile']);
  gulp.watch(paths.sass, ['compile']);
});

// Default Task
gulp.task('default', ['clean', 'bower', 'move_fonts','scripts','sass'
]);
