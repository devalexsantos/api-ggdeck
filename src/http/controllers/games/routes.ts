import { FastifyInstance } from 'fastify'
import { listAll } from './list-all'
import { create } from './create'

export async function gamesRoutes(app: FastifyInstance) {
  app.get('/games', listAll)

  app.post('/games', create)
}
