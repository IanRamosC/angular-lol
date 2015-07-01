'use strict';

var gulp = require('gulp')
	,	jade = require('gulp-jade')
	, sass = require('gulp-sass');

gulp.task('html', function () {
	gulp.src('./dev/jade/*.jade')
		.pipe(jade({
			locals: './'
		}))
		.pipe(gulp.dest('./'))
});

gulp.task('css', function () {
	gulp.src('./dev/sass/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./stylesheets'))
});