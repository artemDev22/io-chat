const MessageModel = require("../db/models/message");

const messageHandlers = (io, socket) => {
    const getMessages = async () => {
        const messages = await MessageModel.find({});
        io.in(socket.roomId).emit('messages', messages)
    }
    const addMessage = async (message) => {
        await new MessageModel(message).save()
        getMessages()
    }

    const removeMessage = async (id) => {
        await MessageModel.remove({
            _id: id
        })
        getMessages()
    }

    socket.on('message:get', getMessages)
    socket.on('message:add', addMessage)
    socket.on('message:remove', removeMessage)
}

module.exports = messageHandlers;