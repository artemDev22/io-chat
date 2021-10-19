const UserModel = require("../db/models/user");

const userHandlers = (io, socket) => {

    const getCurrentUser = async (name) => {
        const user = await UserModel.findOne({name: name});
        io.in(socket.roomId).emit('user', user);
    }

    socket.on('user:getCurrent', getCurrentUser)
}

module.exports = userHandlers;