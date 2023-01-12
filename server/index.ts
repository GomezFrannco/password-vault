import config from 'config'
import CreateApp from './src/app'
import { connectToDB } from './src/utils/db'
import logger from './src/utils/logger'

async function main() {
  const app = CreateApp()
  try {
    app.listen({ port: config.get('port'), host: '0.0.0.0' })
    logger.info(`Server ready at ${config.get('port')}`)
    await connectToDB()
  } catch (err) {
    logger.error(err)
    process.exit(1)
  }
}

main()
