var gulp = require('gulp'),
    rename = require('gulp-rename'),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    precss = require("precss"),
    puer = require("puer");

gulp.task('puer', function() {
    puer();
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
    gulp.watch('src/css/*.css',['css']);
});
gulp.task('default', ['css','puer','watch']);