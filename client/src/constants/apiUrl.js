export const SERVER_URL = "http://localhost:3001/api"

export const API_ROUTES = {
    user: {
        create: `${SERVER_URL}/users/create`,
        get: `${SERVER_URL}/users`,
    },
    chat: {
        create: `${SERVER_URL}/chats/create`
    }
}