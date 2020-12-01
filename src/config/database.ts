import * as dotenv from 'dotenv'

dotenv.config()

export default {
  development: {
    username: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    define: {
      timestemps: true,
      underscored: true,
      underscoredAll: true
    }
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    define: {
      timestemps: true,
      underscored: true,
      underscoredAll: true
    }
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
    define: {
      timestemps: true,
      underscored: true,
      underscoredAll: true
    }
  }
}
