const MessageModel = require("../db/models/message");

const messageHandlers = (io, socket) => {
    const getMessages = async () => {
        const messages = await MessageModel.find({});
        io.in(socket.roomId).emit('messages', messages)
    }
    const addMessage = async (message) => {
        await new MessageModel(message).save()
        await getMessages()
    }

    const removeMessage = async (id) => {
        await MessageModel.remove({
            _id: id
        })
        await getMessages()
    }

    const toggleLike = async (data) => {
        const message = await MessageModel.findOne({
            _id: data.id
        })
        const existedLike = message.likes.indexOf(data.user_id)
        console.log(existedLike)
        console.log(data)
        if (existedLike === -1) {
            message.likes.push(data.user_id)
            message.likes_count += 1
        } else {
            message.likes.splice(existedLike, 1);
            message.likes_count -= 1;
        }
        await MessageModel.updateOne({
          _id: message._id
        }, message);
        await getMessages()
    }

    socket.on('message:get', getMessages)
    socket.on('message:add', addMessage)
    socket.on('message:remove', removeMessage)
    socket.on('message:like', toggleLike)
}

module.exports = messageHandlers;