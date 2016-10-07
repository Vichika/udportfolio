var gulp = require("gulp"),
    imagemin = require("gulp-imagemin"),
    cache = require("gulp-cache"),
    critical = require('critical'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-cssmin');

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

gulp.task("critical-pizza", function() {
    critical.generate({
        inline: true,
        base: './',
        src: 'views/pizza.html',
        dest: 'dist/views/pizza.html',
        width: 1300,
        height: 900,
        minify: true
    });
});

gulp.task("copy-bootstrap", function() {
    gulp.src("./views/css/bootstrap-grid.css")
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/views/css/'));
});

gulp.task("copy-style", function() {
    gulp.src("./views/css/style.css")
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/views/css/'));
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