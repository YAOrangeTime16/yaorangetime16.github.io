
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    gulp.src('./sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});

gulp.task('sass:watch', function(){
    gulp.watch('./sass/main.scss', ['sass']);
});

gulp.task('default', ['sass:watch']);