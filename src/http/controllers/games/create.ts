import { FastifyReply, FastifyRequest } from 'fastify'
import { GamesRepository } from '../../repositories/prisma-games-repository'
import { z } from 'zod'
import { GameAlreadyExistsError } from '../../repositories/erros/game-already-exists'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    name: z.string(),
  })

  const { name } = bodySchema.parse(request.body)

  const gamesRespository = new GamesRepository()

  const gameWithSameEmail = await gamesRespository.findByName({ name })

  try {
    if (gameWithSameEmail.length > 0) {
      throw new GameAlreadyExistsError()
    }
    const gameCreated = await gamesRespository.create({ name })

    return reply.status(201).send(gameCreated)
  } catch (err) {
    if (err instanceof GameAlreadyExistsError) {
      return reply.status(409).send({ message: 'Você já zerou este jogo.' })
    }
  }
}
