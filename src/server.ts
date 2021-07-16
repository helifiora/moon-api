import express from 'express'

const server = express()
server.listen(3000, () => {
    console.log('API Started! Hello World!')
})