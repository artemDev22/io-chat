import {ChatModel} from "../db/models/chat";

export const createChat = async (req: any, res: any) => {
    try {
        const existedChat = await ChatModel.findOne({
            users: req.body.users,
        });
        if (existedChat) {
            return res.status(200).send({
                chat: existedChat,
            });
        }
        const chat = await new ChatModel({
            users: req.body.users,
        }).save();
        return res.status(201).send({
            chat,
        });
    } catch (e) {
        res.status(500).send("Something broke!");
    }
};
