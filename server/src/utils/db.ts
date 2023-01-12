import config from 'config'
import mongoose from 'mongoose'
import logger from './logger'

export async function connectToDB() {
  try {
    await mongoose.connect(config.get('dbHost')).then(() => {
      logger.info('Connected to MongoDB')
    })
  } catch (e) {
    logger.error('Error connecting to database', e)
    process.exit(1)
  }
}

export async function disconnectFromDB() {
  await mongoose.connection.close()
  logger.info('Disconnecting from database')
  return
}
