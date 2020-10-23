import express from 'express'
import { Server } from 'http'

require('dotenv').config()

const app = express()
let server: Server = null

export const start = (port: number = 3000, host: string = '127.0.0.1') => {
  return server = app.listen(port, host, () => {
    console.log(`Server listening at http://${host}:${port}`)
  })
}

export const stop = () => {
  return server.close()
}
