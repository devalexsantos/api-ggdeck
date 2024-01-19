import fastify from 'fastify'
import { gamesRoutes } from './http/controllers/games/routes'

export const app = fastify()

app.register(gamesRoutes)
