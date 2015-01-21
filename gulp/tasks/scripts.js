var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var addSrc = require('gulp-add-src');

var config = require('../config').scripts;

gulp.task('scripts', function() {
	return gulp.src(config.srcHeader)
		.pipe(rename(config.outputMetaName))
		.pipe(gulp.dest(config.dest))

		.pipe(addSrc.append(config.src))
		.pipe(concat(config.outputName))
		.pipe(gulp.dest(config.dest));
});
