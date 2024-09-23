import { FastifyInstance } from 'fastify'

export async function registerUser(app: FastifyInstance) {
  app.post('/', async (req, res) => {
    

    res.status(201).send()
  })
}
