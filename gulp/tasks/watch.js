const   gulp        = require( "gulp" ),
        watch       = require( "gulp-watch" ),
        browSync    = require( "browser-sync" ).create();

gulp.task( 'watch', function(){
    browSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch( './app/index.html', function(){
        browSync.reload();
    });

    watch( './app/assets/styles/**/*.css', ['stylus-css'], function(){
        browSync.reload();
    });

    watch('./app/temp/stylus/**/**.styl', function(){
        gulp.start('css');
    });
});