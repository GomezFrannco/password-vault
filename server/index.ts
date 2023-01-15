import config from 'config'
import CreateApp from './src/app'
import { connectToDB } from './src/utils/db'
import logger from './src/utils/logger'

async function main() {
  const app = CreateApp()
  const port = <number>config.get('port')
  try {
    await app.listen({ port, host: '0.0.0.0' })
    logger.info(`Server ready at ${port}`)
    connectToDB()
  } catch (err) {
    logger.error(err)
    process.exit(1)
  }
}

main()
