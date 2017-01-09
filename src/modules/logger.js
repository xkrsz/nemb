import bunyan from 'bunyan'

export default bunyan.createLogger({
  name: 'example',
  src: true,
  streams: [
    {
      level: 'debug',
      stream: process.stdout
    },
    {
      level: 'warn',
      path: '../warn.log'
    },
    {
      level: 'trace',
      path: '../trace.log'
    }
  ]
})