let gulp = require('gulp');
let browserify = require('browserify');
let babelify = require('babelify');
let source = require('vinyl-source-stream');

gulp.task('default', function() {
	console.log('I am about to learn the essentials of React.js');

	return browserify('./source/app.js')
        .transform(babelify)
        .bundle()
        .pipe(source('snapterest.js'))
        .pipe(gulp.dest('./build/'));
});
