import {LOGIN_NAME, LOGOUT_NAME, USER_NAME_FAIL } from "../constants/userConstants";

export default function authorizationReducer(state = { name: '' }, action) {
    switch (action.type) {
        case LOGIN_NAME:
            return {
                name: action.payload,
            };
        case USER_NAME_FAIL:
            return { error: action.payload }
        case LOGOUT_NAME:
            return {
                name: ''
            }
        default:
            return state;
    }
}
