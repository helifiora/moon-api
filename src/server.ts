import express from 'express'
import { setupRoutes } from '@/main/route'

const server = express()

setupRoutes(server)

server.listen(3000, () => {
  console.log('API Started! Hello World!')
})
