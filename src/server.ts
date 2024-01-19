import { app } from './app'
import { env } from './env'
import cors from '@fastify/cors'

app.register(cors, {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
})

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log('🚀 HTTP Server Running!')
  })