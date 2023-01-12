import config from 'config'
import CreateApp from './src/app'
import { connectToDB } from './src/utils/db'
import logger from './src/utils/logger'

async function main() {
  const app = CreateApp()
  app.listen({ port: config.get('port'), host: '0.0.0.0' }, (err, address) => {
    if (err) {
      logger.error(err)
      process.exit(1)
    }
    logger.info(`Server ready at ${address}`)
  })
}

main()
