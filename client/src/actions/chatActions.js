import axios from "axios";
import {API_ROUTES} from "../constants/apiUrl";
import {GET_CHAT, GET_CHAT_FAIL, GET_CHAT_REQUEST} from "../constants/chatConstants";

export const getChat = (users) => async (dispatch) => {
    try {
        dispatch({
            type: GET_CHAT_REQUEST
        });
        const {data} = await axios.post(`${API_ROUTES.chat.create}`, users);
        dispatch({
            type: GET_CHAT,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: GET_CHAT_FAIL,
            payload: e.message
        });
    }

}