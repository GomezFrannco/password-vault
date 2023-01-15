import config from 'config'
import mongoose from 'mongoose'
import logger from './logger'

export function connectToDB() {
  try {
    mongoose.connect(config.get('dbHost')).then(() => {
      logger.info('Connected to MongoDB')
    })
  } catch (e) {
    logger.error('Error connecting to database', e)
    process.exit(1)
  }
}

export function disconnectFromDB() {
  mongoose.connection.close().then(() => {
    logger.info('Disconnecting from database')
  })
  return
}
