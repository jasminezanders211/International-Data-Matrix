import fastify from 'fastify'
import cors from '@fastify/cors'
import limit from '@fastify/rate-limit'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { countriesRoute } from './routes/countriesRoute'
import { translateRoute } from './routes/translateRoute'

dotenv.config()

const app = fastify({
  logger: false, // set to true for production
})

const start = async () => {
  await mongoose.connect(`${process.env.DATA_BASE}`)

  await app.register(cors, {
    origin: 'https://international-data-matrix.vercel.app', //for production
    // origin: 'http://localhost:5173', //for development
  })
  // Rate limiter
  await app.register(limit, {
    max: 50, //limits each IP to 50 requests per windowMs
    timeWindow: '1 minute',
  })

  await app.register(countriesRoute, {
    prefix: '/Countries',
  })

  await app.register(translateRoute, {
    prefix: '/Translator',
  })

  try {
    const address = await app.listen(
      { port: 4042, host: '' },
      (err, address) => {
        console.log(`Server listening on ${address}`)
      },
    )
  } catch (e) {
    app.log.error(e)
  }
}

start()
