import {LOGIN_NAME, LOGOUT_NAME, RENEW_NAME} from '../constants/userConstants';

const LocalStorageMiddleware = ({ getState, dispatch }) => next => (action) => {
    const result = next(action);

    switch (action.type) {

        case LOGIN_NAME: {
            sessionStorage.setItem('sessionData', JSON.stringify(
                {
                    name: action.payload,
                }
            ))
            break;
        }
        case LOGOUT_NAME:
            sessionStorage.setItem('sessionData', null)
            break;
        default:
            return result;
        case RENEW_NAME: {
            sessionStorage.setItem('sessionData', JSON.stringify({
                name: action.payload,
            }));
            break;
        }
    }

    return result;

};

export default LocalStorageMiddleware;