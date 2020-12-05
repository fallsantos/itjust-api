import * as dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
import morgan from 'morgan'
import cors from 'cors'

import linksRouter from './app/routes/links'

import './database/'

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
    this.server.get('/dev', (req: Request, res: Response) => {
      return res.json({
        name: 'itJust api',
        author: {
          name: 'Flávio Marques',
          email: 'fallsantosdev@hotmail.com'
        }
      })
    })
  }
}

export default new App().server
