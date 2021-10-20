export interface ChatInterface {
    users: string[];
    created_at: Date;
}

export interface CreateChatInterface  {
    users: string[];
}

export interface UpdateUser {
    users?: string[];
    created_at?: Date;
}