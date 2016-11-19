'use strict'

const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const childProcess = require('child_process')
const path = require('path')
const mocha = require('gulp-mocha')
const babel = require('gulp-babel')
const gutil = require('gulp-util')

gulp.task('default', ['babel'], () => {
  nodemon({
    script: './dist/server.js',
    ext: 'js',
    ignore: ['./node_modules/**'],
    stdout: false
  })
  .on('readable', function () {
    let bunyan = childProcess.fork(
      path.join('.', 'node_modules', 'bunyan', 'bin', 'bunyan'),
      ['--output', 'short', '--color'],
      {silent: true}
    )

    bunyan.stdout.pipe(process.stdout)
    bunyan.stderr.pipe(process.stderr)
    this.stdout.pipe(bunyan.stdin)
    this.stderr.pipe(bunyan.stdin)
  })

  gulp.watch('./src/**/*.js', ['babel'])
})

gulp.task('babel', function () {
  return gulp.src('src/**/*.js')
    .pipe(babel()
      .on('error', babelError))
    .pipe(gulp.dest('dist'))
})

gulp.task('test', function () {
  gulp.src('dist/tests/*.js')
  .pipe(mocha({
    reporter: 'nyan'
  }))
})

function babelError (err) {
  gutil.log(err)
  this.end()
}