import { FastifyInstance, FastifyPluginOptions, FastifyError } from 'fastify'
import { loginHandler, registerUserHandler } from '../../controllers/user'

function userRoutes(
  app: FastifyInstance,
  _: FastifyPluginOptions,
  done: (err?: FastifyError) => void
) {

  app.post('/register', registerUserHandler)
  app.post('/login', loginHandler)

  done()
}

export default userRoutes
