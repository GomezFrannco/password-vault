import pino from 'pino'

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      ignore: 'pid,hostname',
      colorize: true,
    }
  }
})

export default logger