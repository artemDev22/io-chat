import {UserModel} from "../db/models/user";

export const createUser = async (req: any, res: any) => {
    try {
        const existedUser = await UserModel.findOne({
            name: req.body.name,
        });
        if (existedUser) {
            return res.status(200).send({
                message: "user exist",
            });
        }
        await new UserModel({
            name: req.body.name,
            created_at: Date.now(),
        }).save();
        return res.status(201).send({
            message: "user created",
        });
    } catch (e) {
        res.status(500).send("Something broke!");
    }
};

export const getUser = async (req: any, res: any) => {
    try {
        const name = req.params.name;
        const existedUser = await UserModel.findOne({
            name,
        });
        if (!existedUser) {
            return res.status(404).send("user not exist");
        }
        return res.send(existedUser);
    } catch (e) {
        return res.status(500).send("Something broke!");
    }
};

export const getUsers = async (req: any, res: any) => {
    try {
        const objIds = req.query.users;
        let options = {};
        if (objIds) {
            options = {_id: {$in: objIds}};
        }
        const users = await UserModel.find(options);
        if (!users.length) {
            return res.status(404).send({
                message: "users not found",
            });
        }
        return res.status(200).send({
            users,
        });
    } catch (e) {
        return res.status(500).send("Something broke!");
    }
};
