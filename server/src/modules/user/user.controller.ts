import { FastifyRequest, FastifyReply } from 'fastify'
import { createVault, findVaultByUser } from '../vault/vault.service'
import { createUser, findUser, generateSalt } from './user.service'
import config from 'config'
import logger from '../../utils/logger'

export async function registerUserHandler(
  request: FastifyRequest<{
    Body: Parameters<typeof createUser>[number];
  }>,
  reply: FastifyReply
) {
  const body = request.body
  try {
    const user = await createUser(body)
    const salt = generateSalt()
    const vault = await createVault({ user: user._id, salt })

    const accessToken = await reply.jwtSign({
      _id: user._id,
      email: user.email
    })
    reply.setCookie('serverToken', accessToken, {
      domain: config.get('cookieDomain'),
      path: '/',
      secure: false, // set to true in production.
      httpOnly: true,
      sameSite: false
    })

    return reply.code(201).send({accessToken, vault: vault.data, salt})
  } catch (e) {
    logger.error(e, 'Error creating user')
    return reply.code(500).send(e) // improve error handling
  }
}

export async function loginHandler(
  request: FastifyRequest<{
    Body: Parameters<typeof createUser>[number];
  }>,
  reply: FastifyReply
) {
  const body = request.body
  try {
    const user = await findUser(body)
    if (!user) {
      return reply.code(401).send('Invalid email or password')
    }

    const vault = await findVaultByUser(user._id)

    const accessToken = await reply.jwtSign({
      _id: user._id,
      email: user.email
    })
    reply.setCookie('serverToken', accessToken, {
      domain: config.get('cookieDomain'),
      path: '/',
      secure: false, // set to true in production.
      httpOnly: true,
      sameSite: false
    })

    return reply.code(200).send({accessToken, vault: vault?.data, salt: vault?.salt})
  } catch (e) {
    logger.error(e, 'Error finding user')
    return reply.code(500).send(e)
  }
}