const   gulp        = require('gulp'),
        stylus      = require('gulp-stylus'),
        nib         = require('nib'),
        postCSS     = require('gulp-postcss'),
        autoPre     = require('autoprefixer'),
        cssImp      = require('postcss-import'),
        minify      = require('gulp-clean-css');

const stylusOps = {
    'use'           : nib,
    'include css'   : true,
    'compress'      : true
};

const minifyOps = {
    level: {
        1: {
            specialComments: 0
        }
    }
};

gulp.task( 'css', ['stylus-css'], function(){
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postCSS([cssImp, autoPre]))
    .pipe(minify(minifyOps))
    .on('error', function(errorInfo){
        console.error(errorInfo.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/assets/styles/processed'));
});

gulp.task('stylus-css', function(){
    return gulp.src('./app/temp/stylus/**/*.styl')
    .pipe(stylus(stylusOps))
    .on('error', function(errorInfo){
        console.error(errorInfo.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/assets/styles'));
});