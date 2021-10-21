import {Schema} from "mongoose";

export const CommonSchema = (params: any) => {
    const schema = new Schema({
        created_at: {type: Date, default: Date.now()},
    });

    if (params) {
        schema.add(params);
    }

    return schema;
};
