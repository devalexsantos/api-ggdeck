export class GameAlreadyExistsError extends Error {
  constructor() {
    super('Cara, o e-mail já existe.')
  }
}
