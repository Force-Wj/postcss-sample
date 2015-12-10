var gulp = require('gulp'),
    rename = require('gulp-rename'),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    precss = require("precss"),
    browserSync = require("browser-sync");

gulp.task('browser-sync', function() {
    browserSync({
        server:{
            baseDir:"./"
        }
    });
});
gulp.task('css', function () {
    var processors = [
        precss,
        autoprefixer({browers:['last 2 versions']})      
    ];
    return gulp.src('src/css/index.css')
        .pipe(postcss(processors))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('dist/'));
});
gulp.task('watch',function(){
    gulp.watch('src/css/*.css',['css',browserSync.reload]);
    gulp.watch('index.html',browserSync.reload);
});
gulp.task('default', ['css','browser-sync','watch']);