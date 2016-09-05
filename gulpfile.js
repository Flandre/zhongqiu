var gulp = require('gulp');
var del = require('del');
var autoprefixer = require('gulp-autoprefixer');
var AUTOPREFIXER_BROWSER = ['last 2 versions'];
var webserver = require('gulp-webserver');

gulp.task('clean', function () {
  return del(['dist/']);
});

gulp.task('copy_modules', function () {
  // jquery
  gulp.src('node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('copy_src', function () {
  // js
  gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js/'));
  // css
  gulp.src('src/css/*.css')
    .pipe(autoprefixer(AUTOPREFIXER_BROWSER))
    .pipe(gulp.dest('dist/css/'));
  // index
  gulp.src('index.html')
    .pipe(gulp.dest('dist/'));
  // images
  gulp.src('src/images/*.*')
    .pipe(gulp.dest('dist/images/'));
});

gulp.task('webserver', function () {
  gulp.src('dist')
    .pipe(webserver({
      fallback: 'index.html',
      livereload: true,
      open: true
    }));
});


gulp.task('watch', function () {
  gulp.watch('src/*/*', ['copy'])
    .on('change', function (event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
  gulp.watch('index.html', ['copy'])
    .on('change', function (event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('server', ['watch', 'webserver']);

gulp.task('copy', ['copy_modules', 'copy_src']);

gulp.task('default', ['copy']);
