import { GamesRepository } from '../../repositories/prisma-games-repository'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function listAll(_: FastifyRequest, reply: FastifyReply) {
  try {
    const gamesRepository = new GamesRepository()
    const games = await gamesRepository.get()

    return reply.status(200).send(games)
  } catch (err) {
    return reply.status(500).send(err)
  }
}
