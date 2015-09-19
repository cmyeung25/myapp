var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass');

gulp.task('default', function() {

    livereload.listen();

    nodemon({

        script: '',
        ext: 'js html jade',
        env: { 'NODE_ENV': 'development' }

    }).on('restart', function () {

        console.log('Restarted Server.');

        gulp.src('.').pipe(livereload());

    });

    gulp.watch('./scss/**/*.scss', ['sass']);

});

gulp.task('sass', function () {
    gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets')).pipe(livereload());
});