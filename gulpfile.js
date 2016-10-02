var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var cache = require("gulp-cache");
var critical = require('critical');

gulp.task("images", function() {
   return gulp.src("img/*")
   // Caching images that ran through imagemin
            .pipe(cache(imagemin()))
            .pipe(gulp.dest("dist/img"))

});

gulp.task("pizza-images", function() {
    return gulp.src("views/images/*")
            .pipe(cache(imagemin()))
            .pipe(gulp.dest("dist/views/images/"))
});

gulp.task("critical", function() {
    critical.generate({
        inline: true,
       // base: '',
        src: 'index.html',
        css: 'css/style.css',
        dest: 'dist/index-critical.html',
        width: 1300,
        height: 900,
        minify: true
    });
});

