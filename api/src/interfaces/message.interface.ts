import {MessageType} from "../types/message";
import {UserInterface} from "./user.interface";

export interface MessageInterface {
    text: string;
    sender: UserInterface;
    reply_message: string | null;
    likes_count: number;
    likes: string[];
    type: MessageType;
    chat_id: string;
    created_at: Date;
}

export interface CreateMessageInterface {
    text: string;
    sender: UserInterface;
    reply_message?: string;
    likes_count: number;
    likes: string[];
    type: MessageType;
    chat_id: string;
}

export interface UpdateMessageInterface {
    text?: string;
    sender?: UserInterface;
    reply_message?: string;
    likes_count?: number;
    likes?: string[];
    type?: MessageType;
    chat_id?: string;
    created_at?: Date;
}
