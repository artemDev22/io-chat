import {Server as HTTPServer} from "http";
import {connect} from "mongoose";
import * as express from 'express';
import * as cors from 'cors';
import { Socket , Server} from 'socket.io';
import {messageHandlers} from "./handlers/messageHandlers";
import {userHandlers} from "./handlers/userHandlers";
import router from "./router";

const app = express();
const server = new HTTPServer(app);

app.use(cors({origin: '*'}));
app.use('/api', router);

const io = new Server(server);

connect("mongodb://root:example@mongo:27017/").then(() => {
    console.log('db connected')
}).catch((e: any) => {
    return console.log(e)
});

const onConnection = (socket: Socket) => {
    const roomId = "free"
    socket.join(roomId)

    messageHandlers(io, socket, roomId)
    userHandlers(io, socket, roomId)

    socket.on('disconnect', () => {
        socket.leave(roomId)
    })
}

io.on('connection', onConnection);

const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
    console.log(`Server ready. Port: ${PORT}`)
})