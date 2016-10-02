var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var cache = require("gulp-cache");

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



