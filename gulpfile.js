var gulp = require('gulp');
var scss = require('gulp-scss');
var livereload = require('gulp-livereload');

gulp.task('scss', function () {
    gulp.src('scss/style.scss')
        .pipe(scss())
        .pipe(gulp.dest('css/'));
});
gulp.task('default', function () {
    livereload.listen();
    gulp.watch('scss/*', ['scss']).on('change', livereload.changed);
    gulp.watch('**/*').on('change', livereload.changed);
});