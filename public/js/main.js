const socket = io('/')

socket.on('connect', () => {
    console.log(`succesfully ${socket.id} connected to socket.io server`)
})