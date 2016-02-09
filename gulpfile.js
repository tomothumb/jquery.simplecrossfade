var gulp = require("gulp");
var plumber = require("gulp-plumber");
var uglify = require("gulp-uglify");


gulp.task("js", function() {
    gulp.src(["src/*.js"])
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest("./dist"));
});

//gulp.task('serve', ['js'], function() {
//    gulp.watch("src/*.js", ['js']);
//});
//
//gulp.task("default", ['serve']);