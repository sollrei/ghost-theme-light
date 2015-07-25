/**
 *
 *
 * @update: 2015/7/20
 * @author: NINE
 *
 */
var gulp = require('gulp'),
    stylus = require('gulp-stylus');

gulp.task('auto', function () {
    gulp.watch('./assets/stylus/screen.styl', ['stylus']);
});

gulp.task('stylus', function () {
    gulp.src('./assets/stylus/screen.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./assets/css/'));
});
