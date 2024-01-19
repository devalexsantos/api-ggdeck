import { GamesRepository } from '../../repositories/prisma-games-repository'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function listAll(request: FastifyRequest, reply: FastifyReply) {
  try {
    const listGames = new GamesRepository()
    const games = await listGames.get()

    return reply.status(200).send(games)
  } catch (err) {
    return reply.status(500).send(err)
  }
}
