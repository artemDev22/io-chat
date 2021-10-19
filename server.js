const http = require("http");
const mongoose = require("mongoose");
const express = require('express');
const cors = require('cors');
const app = express();
const messageHandlers = require("./handlers/messageHandlers");
const userHandlers = require("./handlers/userHandlers");
const server = http.Server(app);
const router = express.Router();
const users = require('./api/routes/user');


app.use(cors({origin: '*'}));

router.use(express.urlencoded({extended: true}))
router.use(express.json())
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

router.use('/users', users);



app.use(router)

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
    const roomId = "free"
    socket.roomId = roomId

    socket.join(roomId)

    messageHandlers(io, socket)
    userHandlers(io, socket)

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