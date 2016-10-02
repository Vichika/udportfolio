# Notes


## Reference Links
 - https://css-tricks.com/gulp-for-beginners/ 
 - https://www.npmjs.com/package/critical // For inlining critical css
 - https://www.smashingmagazine.com/2014/06/building-with-gulp/


## Gulp related Notes

1. How to minify HTML?
  ```
  npm install --save-dev htmlmin
  var htmlMin = require("htmlmin");
  // The default task (called when you run `gulp` from cli)
  gulp.task('default', ['minifyHtml']);
  ```

2. How to minify JS?
```
  npm install gulp-uglify --save-dev
  // Other requires...
  npm install gulp-if
  var uglify = require('gulp-uglify');
  var gulpIf = require('gulp-if');

  gulp.task('useref', function(){
    return gulp.src('app/*.html')
      .pipe(useref())
      // Minifies only if it's a JavaScript file
      .pipe(gulpIf('*.js', uglify()))
      .pipe(gulp.dest('dist'))
  });

```