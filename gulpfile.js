'use strict'

const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const childProcess = require('child_process')
const path = require('path')

gulp.task('default', () => {
  nodemon({
    script: 'server.js',
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
})
