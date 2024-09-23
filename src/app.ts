import fastify from 'fastify'
import { registerUser } from './routes/register'
import { PrismaClient } from '@prisma/client'

export const app = fastify()

export const prisma = new PrismaClient()

app.register(registerUser, {
  prefix: 'register',
})
