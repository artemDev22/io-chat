import {
    GET_USER,
    GET_USER_FAIL,
    GET_USER_REQUEST,
    GET_USERS,
    GET_USERS_BY_CHAT,
    GET_USERS_BY_CHAT_FAIL,
    GET_USERS_BY_CHAT_REQUEST,
    GET_USERS_FAIL,
    GET_USERS_REQUEST,
    LOGIN_NAME,
    LOGIN_NAME_REQUEST,
    USER_NAME_FAIL
} from "../constants/userConstants";
import axios from "axios";
import {API_ROUTES} from "../constants/apiUrl";
import {stringify} from "qs";

export const loginName = (name) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_NAME_REQUEST
        });
        await axios.post(API_ROUTES.user.create, {
            name
        });
        dispatch({
            type: LOGIN_NAME,
            payload: name,
        });

    } catch (e) {
        dispatch({
            type: USER_NAME_FAIL,
            payload: e.message
        });
    }
}

export const getUser = (name) => async (dispatch) => {
    try {
        dispatch({
            type: GET_USER_REQUEST
        });
        const {data} = await axios.get(`${API_ROUTES.user.get}/${name}`);
        dispatch({
            type: GET_USER,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: GET_USER_FAIL,
            payload: e.message
        });
    }
}

export const getUsers = (users = null) => async (dispatch) => {
    try {
        dispatch({
            type: GET_USERS_REQUEST
        });
        const {data} = await axios.get(`${API_ROUTES.user.get}`, {
            params: {
                users
            },
            paramsSerializer: params => {
                return stringify(params)
            }
        });
        dispatch({
            type: GET_USERS,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: GET_USERS_FAIL,
            payload: e.message
        });
    }
}

export const getUsersByChat = (users) => async (dispatch) => {
    try {
        dispatch({
            type: GET_USERS_BY_CHAT_REQUEST
        });
        const {data} = await axios.get(`${API_ROUTES.user.get}`, {
            params: {
                users
            },
            paramsSerializer: params => {
                return stringify(params)
            }
        });
        dispatch({
            type: GET_USERS_BY_CHAT,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: GET_USERS_BY_CHAT_FAIL,
            payload: e.message
        });
    }
}