import '../src/utils/dotenv'

export default {
  port: process.env.PORT,
  dbHost: process.env.MONGO_HOST,
  corsOrigin: process.env.CORS_ORIGIN,
  privateKey: process.env.ACCESS_PRIVATE_KEY,
  publicKey: process.env.ACCESS_PUBLIC_KEY,
}
