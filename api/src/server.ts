import * as cors from "cors";
import * as express from "express";
import {Server as HTTPServer} from "http";
import {connect} from "mongoose";
import { Server , Socket} from "socket.io";
import router from "./router";
import {subscribeHandler} from "./subscriber";

const app = express();
const server = new HTTPServer(app);

app.use(cors({origin: "*"}));

app.use("/api", router);

const io = new Server(server);

connect("mongodb://root:example@mongo:27017/").then(() => {
    console.log("db connected");
}).catch((e: any) => {
    console.log(e);
});

export const onConnection = (socket: Socket) => {
    subscribeHandler(io , socket);
};
io.on("connection", onConnection);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Server ready. Port: ${PORT}`);
});
