import {GET_CHAT, GET_CHAT_FAIL, GET_CHAT_REQUEST} from "../constants/chatConstants";

export function chatReducer(state = { chat: {} }, action) {
    switch (action.type) {
        case GET_CHAT_REQUEST:
            return {
                loading: true
            }
        case GET_CHAT:
            return {
                chat: action.payload,
            };
        case GET_CHAT_FAIL:
            return { error: action.payload, loading: false }
        default:
            return state;
    }
}
