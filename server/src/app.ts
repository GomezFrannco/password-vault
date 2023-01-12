import { readFileSync } from 'fs'
import path from 'path'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import cookie from '@fastify/cookie'
import config from 'config'
import fastify, { FastifyRequest, FastifyReply } from 'fastify'

function CreateApp() {
  const app = fastify()

  app.register(cors, {
    origin: config.get('corsOrigin'),
    credentials: true,
  })
  app.register(jwt, {
    secret: {
      private: readFileSync(`${path.join(process.cwd(), 'certs')}/private.key`),
      public: readFileSync(`${path.join(process.cwd(), 'certs')}/public.key`),
    },
    sign: {
      algorithm: 'RS256',
    },
    cookie: {
      cookieName: 'serverToken',
      signed: false,
    },
  })
  app.register(cookie, {
    parseOptions: {},
  })

  app.decorate(
    'authenticate',
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        const user = await request.jwtVerify<{
          _id: string;
        }>()
        request.user = user
      } catch (e) {
        return reply.send(e)
      }
    }
  )   

  return app
}

export default CreateApp