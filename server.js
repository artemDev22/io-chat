const http = require("http");
const mongoose = require("mongoose");
const messageHandlers = require("./handlers/messageHandlers");
const server = http.createServer();
const io = require("socket.io")(server, {
    cors: {
        origin: '*'
    }
});

mongoose.connect(process.env.MONGO_DB_URL).then(() => {
    console.log('db connected')
}).catch(e => {
    return console.log(e)
});

const onConnection = (socket) => {
    console.log('User connected')
    const roomId = "free"
    socket.roomId = roomId

    socket.join(roomId)

    messageHandlers(io, socket)

    socket.on('disconnect', () => {
        // выводим сообщение
        console.log('User disconnected')

        socket.leave(roomId)
    })
}

io.on('connection', onConnection);

const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
    console.log(`Server ready. Port: ${PORT}`)
})