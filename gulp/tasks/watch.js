var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['build', 'browserSync'], function() {
	gulp.watch(config.example.src, ['example']);
	gulp.watch(config.scripts.src, ['scripts']);
});
