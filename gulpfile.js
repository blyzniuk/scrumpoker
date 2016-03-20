var gulp = require('gulp');
var exec = require('child_process').exec;
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var fs = require('fs');
var browserify = require('browserify');
var ngHtml2Js = require("gulp-ng-html2js");

var path = {
    scripts: 'src/app',
    templates: 'src/app/**/*.html'
};

gulp.task('serve', function (cb) {
    exec('node app.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('build:js', ['build:html'], function () {
    return browserify(path.scripts)
        .transform('babelify', { presets: ['es2015'] })
        .bundle()
        .pipe(fs.createWriteStream('build/app.js'));
});

gulp.task('build:html', function() {
    gulp.src(path.templates)
        .pipe(ngHtml2Js({
            moduleName: 'Templates'
        }))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('webserver', ['build'], function() {
    gulp.src('build')
        .pipe(webserver({
            livereload: true,
            open: 'http://localhost:8000/'
        }));
});

gulp.task('build', ['build:js']);
gulp.task('dev', ['webserver']);