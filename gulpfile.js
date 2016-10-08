var gulp = require("gulp"),
    imagemin = require("gulp-imagemin"),
    cache = require("gulp-cache"),
    critical = require('critical'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-cssmin');

/*** Image Optimization ***/

// optimize images for index.html
gulp.task("images", function() {
   return gulp.src("img/*")
   // Caching images that ran through imagemin
            .pipe(cache(imagemin()))
            .pipe(gulp.dest("dist/img"))

});

// optimize images for pizza.html
gulp.task("pizza-images", function() {
    return gulp.src("views/images/*")
            .pipe(cache(imagemin()))
            .pipe(gulp.dest("dist/views/images/"))
});

/***  Above the Fold Critical CSS ***/ 

// critical internal stylesheet for index.html 
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

// critical internal stylesheet for pizza.html within the views folder 
gulp.task("critical-pizza", function() {
     critical.generate({
        inline: true,
        base: './',
        src: 'views/pizza.html',
        dest: 'dist/views/pizza-critical.html',
        width: 1300,
        height: 900,
        minify: true
    });
});

/*** Minify JS Files ***/

// minify main.js inside views
gulp.task('minify-main', function() {
    return gulp.src('views/js/main.js')
            .pipe(rename({suffix:'.min'}))
            .pipe(uglify())
            .pipe(gulp.dest('dist/views/js'));
});
// perfmatters outer structure
gulp.task('minify-perfmatters', function() {
    return gulp.src('js/perfmatters.js')
            .pipe(rename({suffix:'.min'}))
            .pipe(uglify())
            .pipe(gulp.dest('dist/js/'));
});

// watch and update whenever changes are saved
gulp.task('watch', function() {
    gulp.watch('views/js/main.js', ['minify-main']);
});

// default gulp task
gulp.task('default', ['minify-main','minify-perfmatters']);