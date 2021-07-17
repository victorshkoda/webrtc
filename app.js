const express = require('express')
const http = require('http')
const serveStatic = require("serve-static")
const path = require('path')
const PORT = process.env.PORTR || 3000
const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)

io.on('connection', (socket) => {
    console.log(`User with id: ${socket.id} connected to socket.io server`)
})

app.use(serveStatic(path.join(__dirname, 'public')))

server.listen(PORT, () =>{
    console.log(`Server started on port ${PORT}`)
})
