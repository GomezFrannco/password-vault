import { FastifyInstance, FastifyPluginOptions, FastifyError } from 'fastify'
import { registerUserHandler } from './user.controller'

function userRoutes(
  app: FastifyInstance,
  _: FastifyPluginOptions,
  done: (err?: FastifyError) => void
) {

  app.post('/register', registerUserHandler)

  done()
}

export default userRoutes
