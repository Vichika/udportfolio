var gulp = require("gulp"),
    imagemin = require("gulp-imagemin"),
    cache = require("gulp-cache"),
    critical = require('critical'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

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
        base: './',
        src: 'index.html',
        dest: 'dist/index-critical.html',
        width: 1300,
        height: 900,
        minify: true
    });
});

// minify/uglify js
gulp.task('minify-main', function() {
    return gulp.src('views/js/main.js')
            .pipe(rename({suffix:'.min'}))
            .pipe(uglify())
            .pipe(gulp.dest('dist/views/js'));
});

// watch and update whenever changes are saved
gulp.task('watch', function() {
    gulp.watch('views/js/main.js', ['minify-main']);
});

// default gulp task
gulp.task('default', ['minify-main']);