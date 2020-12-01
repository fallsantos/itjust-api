import * as dotenv from 'dotenv'
import express, { Express } from 'express'
import morgan from 'morgan'
import cors from 'cors'

import linksRouter from './app/routes/links'

import './database/index.'

dotenv.config()

class App {
  server: Express

  constructor () {
    this.server = express()
    this.server.set('port', process.env.PORT)

    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.server.use(express.json())
    this.server.use(morgan('dev'))
    this.server.use(cors())
  }

  routes () {
    this.server.use(linksRouter)
  }
}

export default new App().server
