import {
    GET_USER,
    GET_USER_FAIL,
    GET_USER_REQUEST,
    LOGIN_NAME,
    LOGIN_NAME_REQUEST,
    USER_NAME_FAIL
} from "../constants/userConstants";
import axios from "axios";
import {SERVER_URL} from "../constants/apiUrl";

export const loginName = (name) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_NAME_REQUEST
        })
        await axios.post(`${SERVER_URL}/users/create`, {
            name
        })
        dispatch({
            type: LOGIN_NAME,
            payload: name,
        })


    } catch (e) {
        dispatch({
            type: USER_NAME_FAIL,
            payload: e.message
        })
    }


}

export const getUser = (name) => async (dispatch) => {
    try {
        dispatch({
            type: GET_USER_REQUEST
        })
        const {data} = await axios.get(`${SERVER_URL}/users/${name}`)
        dispatch({
            type: GET_USER,
            payload: data,
        })
    } catch (e) {
        dispatch({
            type: GET_USER_FAIL,
            payload: e.message
        })
    }


}