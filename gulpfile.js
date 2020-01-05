var gulp = require('gulp');
gulp.task('taskName', function() {
    console.log('taskName');
});

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('css', function(){
  return sass('sass/')
        .pipe(gulp.dest('./css'));
});

// gulp.task('default', ['sass'], function() {

//     gulp.watch("scss/**/*.scss", ['sass']);
// });