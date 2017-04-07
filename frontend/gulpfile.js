var
         gulp = require('gulp'),
         sass = require('gulp-sass'),
         inky = require('inky'),
    inlineCss = require('gulp-inline-css'); 

//styles
gulp.task('styles', function () {
    return gulp.src('../scss/style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('../dist'));
});

//convert inky
gulp.task('inky', function () {
    return gulp.src('../templates/**/*.html')
        .pipe(inky())
        .pipe(gulp.dest('../dist'));
});

//inline css
gulp.task('inline', function () {
    return gulp.src('../dist/*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('../dist/inlined'));
    
});

//watch
gulp.task('default', function () {
    gulp.watch('../scss/**/*.scss',['styles']);
    gulp.watch('../templates/**/*.html',['inky']);
});