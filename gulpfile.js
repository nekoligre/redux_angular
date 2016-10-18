var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('start', function() {
  gulp.run('server');
});

gulp.task('server', function() {
 gulp.src('.')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});
