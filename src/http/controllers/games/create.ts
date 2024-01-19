import { FastifyReply, FastifyRequest } from 'fastify'
import { GamesRepository } from '../../repositories/prisma-games-repository'
import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    name: z.string(),
  })

  const { name } = bodySchema.parse(request.body)

  try {
    const gamesRespository = new GamesRepository()
    const gameCreated = await gamesRespository.create({ name })

    return reply.status(201).send(gameCreated)
  } catch (err) {
    return reply.status(500).send(err)
  }
}
