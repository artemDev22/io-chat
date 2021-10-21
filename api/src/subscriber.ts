import {Server, Socket} from "socket.io";
import {messageHandlers} from "./handlers/messageHandlers";
import {userHandlers} from "./handlers/userHandlers";

export const subscribeHandler = (io: Server, socket: Socket) => {
    socket.on("subscribe", (roomId: string) => {
        socket.join(roomId);
        messageHandlers(io, socket, roomId);
        userHandlers(io, socket, roomId);
        socket.on("unsubscribe", (roomId: string) => {
            socket.leave(roomId);
        });
    });
});
