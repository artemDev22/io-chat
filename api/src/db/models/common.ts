import {Schema, model} from "mongoose";

export const CommonSchema = (newSchema: Schema, name: string) => {
    const schema = new Schema({
        created_at: {type: Date, default: Date.now()},
        child: newSchema
    });

    return model(name, schema);
};
