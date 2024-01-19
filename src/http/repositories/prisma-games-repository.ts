import { prisma } from '../../lib/prisma'

export class GamesRepository {
  async get() {
    const games = await prisma.games.findMany()

    return games
  }

  async create({ name }: { name: string }) {
    const game = await prisma.games.create({
      data: {
        name,
      },
    })

    return game
  }

  async findByName({ name }: { name: string }) {
    const game = await prisma.games.findMany({
      where: {
        name,
      },
    })

    return game
  }
}
