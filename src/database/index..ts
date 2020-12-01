import { Sequelize } from 'sequelize'

import databaseConfigs from '../config/database'

class Database {
  connection: Sequelize | null
  auth: any

  constructor () {
    this.connection = null
    this.auth = databaseConfigs
    this.init()
  }

  async init () {
    this.connection = new Sequelize(this.auth.development)

    try {
      await this.connection.authenticate()
      console.log('Connection has been established successfully.')
    } catch (error) {
      console.error('Unable to connect to the database:', error)
    }
  }
}

export default new Database()
