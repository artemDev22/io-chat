const UserModel = require("../../db/models/user");

const createUser = async (req, res) => {
    try {
        const existedUser = await UserModel.findOne({
            name: req.body.name,
        })
        if (existedUser) {
            return res.status(200).send({
                message: "user exist"
            })
        }
        await new UserModel({
            name: req.body.name,
            created_at: Date.now()
        }).save();
        return res.status(201).send({
            message: "user created"
        })
    } catch (e) {
        res.status(500).send('Something broke!');
    }
}

const getUser = async (req, res) => {
    try {
        const name = req.params.name
        const existedUser = await UserModel.findOne({
            name
        })
        console.log(existedUser)
        if (!existedUser) {
            return res.status(404).send("user not exist")
        }
        return res.send(existedUser)
    } catch (e) {
        return res.status(500).send('Something broke!');
    }
}

module.exports = {
    createUser,
    getUser,
}

