export interface UserInterface {
    name: string;
    created_at: Date;
}

export interface CreateUser {
    name: string;
}

export interface UpdateUser {
    name?: string;
    created_at?: Date;
}