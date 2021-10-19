import {
    GET_USER,
    GET_USER_FAIL,
    GET_USER_REQUEST,
    LOGIN_NAME,
    LOGIN_NAME_REQUEST,
    LOGOUT_NAME,
    USER_NAME_FAIL
} from "../constants/userConstants";

export function authorizationReducer(state = { name: '' }, action) {
    console.log(action)
    switch (action.type) {
        case LOGIN_NAME_REQUEST:
            return {
                loading: true
            }
        case LOGIN_NAME:
            return {
                name: action.payload,
            };
        case USER_NAME_FAIL:
            return { error: action.payload, loading: false }
        case LOGOUT_NAME:
            return {
                name: ''
            }
        default:
            return state;
    }
}

export function userReducer(state = { user: {} }, action) {
    switch (action.type) {
        case GET_USER_REQUEST:
            return {
                loading: true
            }
        case GET_USER:
            return {
                user: action.payload,
            };
        case GET_USER_FAIL:
            return { error: action.payload, loading: false }
        default:
            return state;
    }
}
