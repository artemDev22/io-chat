import {Server, Socket} from "socket.io";
import {MessageModel} from "../db/models/message";

export const messageHandlers = (io: Server, socket: Socket, roomId: string) => {
    const getMessages = async () => {
        const messages = await MessageModel.find({});
        io.in(roomId).emit("messages", messages);
    };
    const addMessage = async (message: any) => {
        await new MessageModel(message).save();
        await getMessages();
    };

    const removeMessage = async (id: string) => {
        await MessageModel.remove({
            _id: id,
        });
        await getMessages();
    };

    const toggleLike = async (data: any) => {
        const message = await MessageModel.findOne({
            _id: data.id,
        });
        const existedLike = message.likes.indexOf(data.user_id);

        if (existedLike === -1) {
            message.likes.push(data.user_id);
            message.likes_count += 1;
        } else {
            message.likes.splice(existedLike, 1);
            message.likes_count -= 1;
        }
        await MessageModel.updateOne({
          _id: message._id,
        }, message);
        await getMessages();
    };

    socket.on("message:get", getMessages);
    socket.on("message:add", addMessage);
    socket.on("message:remove", removeMessage);
    socket.on("message:like", toggleLike);
};
