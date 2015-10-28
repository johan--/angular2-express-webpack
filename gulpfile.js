var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    nodemon = require('gulp-nodemon');

gulp.task('compile-ts', function () {
    gulp.src('server/**')
        .pipe(sourcemaps.init())
        .pipe(tsc({
            target: 'ES5',
            module: 'commonjs',
            declaration: false,
            noImplicitAny: false,
            removeComments: true,
            noLib: false,
            emitDecoratorMetadata: true,
            experimentalDecorators: true,
            sourceMap: true
        }))
        .pipe(gulp.dest('server'));
});

gulp.task('start', function () {
   nodemon({
        script: 'server/server.js',
        ext: 'ts',
        watch: ['server/**'],
        tasks: ['compile-ts'],
        // nodeArgs: ['--debug']
   });
});

gulp.task('default', ['start']);