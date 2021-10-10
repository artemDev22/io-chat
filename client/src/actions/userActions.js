import {LOGIN_NAME} from "../constants/userConstants";

export const loginName = (name) => async (dispatch, history) => {
    dispatch({
        type: LOGIN_NAME,
        payload: name,
    })
}