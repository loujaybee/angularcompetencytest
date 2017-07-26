const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

gulp.task('default', () => {
    return gulp.src('public/**/!(main|*.test|*.min).js')
        .pipe(concat('main.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(minify({
        	mangle: false,
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest('public'));
});
