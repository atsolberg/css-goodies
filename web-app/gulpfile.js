var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps');

/** CSS Task */
gulp.task('css', function () {
    gulp.src('../less/**/*.less')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./public/css'));
});

/** JS Task */
gulp.task('js', function () {
    gulp.src('./public/js/**/*.js')
        .pipe(plumber())
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./public/js'));
});

/** Watch Task */
gulp.task('watch', function () {
    gulp.watch('../less/**/*.less', ['css']);
    gulp.watch('./public/js/**/*.js', ['js']);
});

/** Default */
gulp.task('default', ['css', 'js', 'watch']);