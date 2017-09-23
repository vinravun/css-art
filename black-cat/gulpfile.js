var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "."
        }
    });
});

gulp.task('sass', function() {
	return gulp.src('scss/main.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(gulp.dest('css'))
	.pipe(browserSync.stream());
});


gulp.task('watch',  ['browser-sync', 'sass'], function() {
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('*.html', browserSync.reload); 
});

gulp.task('default', ['sass', 'browser-sync', 'watch',]);
